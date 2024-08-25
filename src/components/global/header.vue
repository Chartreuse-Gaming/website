<template>
    <header>
        <article>
            <section>
                <!-- Logo -->
                <router-link id="logo" to="/" @click="nav = false">
                    <img
                        :alt="$t('association.logo') + '.'"
                        height="56"
                        src="@/assets/svg/logo.svg"
                        width="44"
                    />
                </router-link>

                <!-- Navigation -->
                <nav>
                    <font-awesome-icon
                        id="mobile"
                        icon="fa-solid fa-bars"
                        @click.prevent="nav = !nav"
                    />
                    <div :class="nav === true ? 'appear' : ''">
                        <div>
                            <router-link
                                :class="
                                    $route.path === '/' &&
                                    current_link === 'home'
                                        ? 'current'
                                        : ''
                                "
                                :to="{ name: 'home' }"
                                @click="nav = false"
                                >{{ $t("home") }}
                            </router-link>
                            <a
                                id="dropdown"
                                :class="
                                    $route.path.startsWith('/tournament/')
                                        ? 'current'
                                        : ''
                                "
                                href=""
                                @mouseleave="dropdown = false"
                                @click.prevent="dropdown = !dropdown"
                            >
                                {{ $t("tournaments.self") }}
                                <font-awesome-icon
                                    icon="fa-solid fa-sort-down"
                                />
                                <transition>
                                    <div v-if="dropdown">
                                        <router-link
                                            :class="
                                                $route.path.startsWith(
                                                    '/tournament/alpine-rivals-2'
                                                )
                                                    ? 'current'
                                                    : ''
                                            "
                                            :to="{ name: 'Alpine_Rivals_2' }"
                                            @click="nav = false"
                                        >
                                            {{
                                                $t(
                                                    "tournaments.Alpine_Rivals.2.self"
                                                )
                                            }}
                                        </router-link>
                                        <router-link
                                            :class="
                                                $route.path.startsWith(
                                                    '/tournament/alpine-rivals-1'
                                                )
                                                    ? 'current'
                                                    : ''
                                            "
                                            :to="{ name: 'Alpine_Rivals_1' }"
                                            @click="nav = false"
                                        >
                                            {{
                                                $t(
                                                    "tournaments.Alpine_Rivals.1.self"
                                                )
                                            }}
                                        </router-link>
                                        <router-link
                                            :class="
                                                $route.path.startsWith(
                                                    '/tournament/CEC'
                                                )
                                                    ? 'current'
                                                    : ''
                                            "
                                            :to="{ name: 'CEC' }"
                                            @click="nav = false"
                                        >
                                            {{ $t("tournaments.CEC.self") }}
                                        </router-link>
                                        <router-link
                                            :class="
                                                $route.path.startsWith(
                                                    '/tournament/CGW-2019'
                                                )
                                                    ? 'current'
                                                    : ''
                                            "
                                            :to="{ name: 'CGW_2019' }"
                                            @click="nav = false"
                                        >
                                            {{
                                                $t("tournaments.CGW_2019.self")
                                            }}
                                        </router-link>
                                    </div>
                                </transition>
                            </a>
                            <router-link
                                :class="
                                    $route.path === '/' &&
                                    current_link === 'association'
                                        ? 'current'
                                        : ''
                                "
                                to="/#association"
                                @click.prevent="toAnchor('association')"
                                >{{ $t("association.self", 1) }}
                            </router-link>
                            <router-link
                                :class="
                                    $route.path === '/' &&
                                    current_link === 'contact'
                                        ? 'current'
                                        : ''
                                "
                                to="/#contact"
                                @click.prevent="toAnchor('contact')"
                                >{{ $t("contact.self") }}
                            </router-link>
                            <span @click.prevent="nav = false"></span>
                        </div>
                    </div>
                </nav>
            </section>

            <!-- Réseaux sociaux -->
            <section>
                <a href="https://discord.gg/invite/ENY2nV6" title="Discord">
                    <font-awesome-icon icon="fa-brands fa-discord" />
                </a>
                <a
                    :class="data.livestream ? 'livestream' : ''"
                    href="https://www.twitch.tv/alpesesport"
                    title="Twitch"
                >
                    <font-awesome-icon icon="fa-brands fa-twitch" />
                    <i></i>
                    <i></i>
                </a>
                <a href="https://www.youtube.com/@AlpesEsport" title="YouTube">
                    <font-awesome-icon icon="fa-brands fa-youtube" />
                </a>
                <a href="https://twitter.com/AlpesEsport" title="Twitter">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
                <a
                    href="https://www.instagram.com/alpes_esport/"
                    title="Instagram"
                >
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
                <a href="https://www.facebook.com/AlpesEsport" title="Facebook">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
            </section>
        </article>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: ["current_link"],
    data() {
        return {
            dropdown: false,
            nav: false,
            header: {},
            body: {},
            data: {
                livestream: false,
            },
        };
    },
    async mounted() {
        this.header = document.getElementsByTagName("header")[0];
        this.body = document.getElementsByTagName("body")[0];
        document.addEventListener("scroll", this.scrollClassToggler);
        let response = await fetch("https://api.minarox.fr/chartreusegaming", {
            cache: "force-cache",
        });
        this.data = await response.json();
    },
    beforeUnmount() {
        document.removeEventListener("scroll", this.scrollClassToggler);
    },
    methods: {
        toAnchor(anchor) {
            this.nav = false;
            if (this.$route.path !== "/") {
                setTimeout(() => {
                    this.$router.push("/#" + anchor);
                }, 450);
            }
        },
        scrollClassToggler() {
            if (document.documentElement.scrollTop > 70) {
                this.header.classList.add("scroll");
            } else {
                this.header.classList.remove("scroll");
            }
        },
    },
    watch: {
        nav() {
            if (this.nav) {
                this.body.style.overflow = "hidden";
            } else {
                this.body.style.overflow = "overlay";
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../node_modules/compass-mixins/lib/compass/css3";

$header-height: 90px;

.scroll {
    @include box-shadow(inset 0 100px 90px -100px var(--bg-color));
    backdrop-filter: blur(8px);
    background-color: rgba(38, 38, 38, 0.6);
}

.v-enter-active,
.v-leave-active {
    transition: opacity 200ms ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.appear {
    opacity: 1 !important;
    pointer-events: unset !important;
    user-focus: unset !important;
    user-select: unset !important;
}

header {
    height: $header-height;
    left: 0;
    position: sticky;
    top: 0;
    transition: all 600ms;
    z-index: 99;

    article {
        align-items: center;
        display: flex;
        height: inherit;
        justify-content: space-between;
        margin-inline: auto;
        width: min(100% - 1rem, 1650px);

        section {
            align-items: center;
            display: flex;
            height: inherit;

            a {
                align-items: center;
                color: var(--text-color);
                display: inline-flex;
                font-family: var(--title-font);
                font-weight: bold;
                height: $header-height;
                text-decoration: none;
                text-transform: uppercase;
            }
        }
    }
}

section:first-of-type nav {
    #mobile {
        display: none;
        height: $header-height;
        padding: 0 1.4rem;
        width: 2em;
    }

    #dropdown {
        position: relative;

        div {
            background-color: var(--bg-color);
            border-radius: 8px;
            top: 68px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
                0 6px 6px rgba(0, 0, 0, 0.23);
            display: flex;
            flex-flow: column nowrap;
            left: 4px;
            position: absolute;
            width: max-content;

            a {
                font-size: 0.94em;
                height: max-content;
                padding: 0.5rem 1rem;

                &:first-of-type {
                    padding-top: 1rem;
                }

                &:last-of-type {
                    padding-bottom: 1rem;
                }
            }
        }
    }

    a {
        padding: 1.2rem;
        transition: color 150ms;

        svg {
            margin-left: 0.6rem;
            padding-bottom: 6px;
        }

        &:hover {
            color: var(--special-color);

            svg {
                color: var(--special-color);
                transition: color 150ms;
            }
        }
    }
}

section:last-of-type > a {
    padding: 1rem;

    & > svg {
        height: 20px;
        transform: scale(1);
        transition: all 150ms;
    }

    &:hover {
        svg {
            color: var(--subtext-color);
            transform: scale(1.1);
        }
    }
}

.current {
    color: var(--special-color);

    svg {
        color: var(--special-color);
    }
}

#logo {
    align-items: center;
    display: inline-flex;
    height: $header-height;
    justify-content: center;
    padding: 1rem;

    img {
        height: 56px;
        transform: scale(1);
        transition: transform 200ms;
    }

    &:hover {
        img {
            transform: scale(1.08);
        }
    }
}

.livestream {
    position: relative;

    i {
        position: absolute;
        top: 30px;
        right: 13px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: #f00000;
    }

    i:last-of-type {
        animation: pulse-scale 2.6s infinite;
    }

    @keyframes pulse-scale {
        0% {
            opacity: 0.7;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(2.4);
        }
    }
}

@media only screen and (max-width: 1080px) {
    section:first-of-type {
        width: 100%;
        justify-content: space-between;
    }

    section:last-of-type {
        display: none;
    }
}

@media only screen and (max-width: 650px) {
    section:first-of-type > nav > div {
        opacity: 0;
        pointer-events: none;
        user-select: none;
        user-focus: none;
        background-color: rgba(38, 38, 38, 0.9);
        z-index: -1;
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        transition: opacity 200ms ease-in-out;

        & > div {
            position: absolute;
            height: calc(100% - $header-height);
            width: 100%;
            top: $header-height;
            left: 0;
            font-size: 1.5em;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            overflow-y: overlay;

            span {
                width: 100%;
                height: 100%;
            }

            a {
                width: 100%;
                display: block;
                text-align: center;
            }

            #dropdown {
                width: 100%;
                justify-content: center;

                div {
                    height: max-content;
                    flex-flow: column nowrap;
                    align-items: center;
                    top: 74px;
                    left: 0;
                    border-radius: 0;
                    width: 100vw;

                    a {
                        text-align: center;
                        padding: 1rem 0.8rem;

                        &:first-of-type {
                            padding-top: 2rem;
                        }

                        &:last-of-type {
                            padding-bottom: 2rem;
                        }
                    }
                }
            }
        }
    }

    #mobile {
        display: block !important;
    }
}
</style>
