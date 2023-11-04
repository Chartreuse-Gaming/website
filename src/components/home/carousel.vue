<template>
    <article id="carousel">
        <Splide
            :aria-label="$t('tournaments.self')"
            :options="options"
            @splide:autoplay:play="updateDOM"
            @splide:autoplay:pause="updateDOM"
            @splide:active="updateDOM"
        >
            <SplideSlide>
                <article>
                    <section>
                        <p class="CEC">
                            Nous<br />
                            devenons<br />
                            Alpes Esport
                        </p>
                        <router-link class="btn" to="/#association">
                            {{ $t("read-more") }}
                            <font-awesome-icon icon="fa-solid fa-right-long" />
                        </router-link>
                    </section>
                    <section>
                        <video
                            autoplay
                            loop
                            muted
                            src="@/assets/mp4/changement_nom.mp4"
                        />
                    </section>
                </article>
                <img
                    :alt="$t('tournaments.CEC.6.self')"
                    loading="lazy"
                    src="@/assets/img/carousel/Nouveau_nom.webp"
                />
            </SplideSlide>
            <!--<SplideSlide>
<article>
<section>
<p>{{ $t("tournaments.CEC.5.date") }}</p>
<p class="CEC">
Chartreuse<br />
Esport<br />
Contest <span>5</span>
</p>
<router-link :to="{ name: 'CEC5' }" class="btn">
{{ $t("read-more") }}
<font-awesome-icon icon="fa-solid fa-right-long" />
</router-link>
</section>
<img
src="@/assets/img/carousel/CEC/CEC_logo.webp"
:alt="$t('tournaments.CEC.self') + ' logo'"
/>
</article>
<img
src="@/assets/img/carousel/CEC/CEC5.webp"
:alt="$t('tournaments.CEC.5.self')"
/>
</SplideSlide>
<SplideSlide>
<article>
<section>
<p>{{ $t("tournaments.CEC.4.date") }}</p>
<p id="CEC4" class="CEC">
Chartreuse<br />
Esport<br />
Contest <span>4</span>
<span>Online</span>
</p>
<router-link :to="{ name: 'CEC4' }" class="btn">
{{ $t("read-more") }}
<font-awesome-icon icon="fa-solid fa-right-long" />
</router-link>
</section>
<img
src="@/assets/img/carousel/CEC/CEC_logo.webp"
:alt="$t('tournaments.CEC.self') + ' logo'"
/>
</article>
<img
src="@/assets/img/carousel/CEC/CEC4.webp"
:alt="$t('tournaments.CEC.4.self')"
/>
</SplideSlide>
<SplideSlide>
<article>
<section>
<p>{{ $t("tournaments.CEC.3.date") }}</p>
<p class="CEC">
Chartreuse<br />
Esport<br />
Contest <span>3</span>
</p>
<router-link :to="{ name: 'CEC3' }" class="btn">
{{ $t("read-more") }}
<font-awesome-icon icon="fa-solid fa-right-long" />
</router-link>
</section>
<img
src="@/assets/img/carousel/CEC/CEC_logo.webp"
:alt="$t('tournaments.CEC.self') + ' logo'"
/>
</article>
<img
src="@/assets/img/carousel/CEC/CEC3.webp"
:alt="$t('tournaments.CEC.3.self')"
/>
</SplideSlide>
<SplideSlide>
<article>
<section>
<p>{{ $t("tournaments.CGW_2019.date") }}</p>
<p>
Chartreuse<br />
Gaming<br />
Winter 2019
</p>
<router-link :to="{ name: 'CGW_2019' }" class="btn">
{{ $t("read-more") }}
<font-awesome-icon icon="fa-solid fa-right-long" />
</router-link>
</section>
</article>
<img
src="@/assets/img/carousel/CGW_2019.webp"
:alt="$t('tournaments.CGW_2019.self')"
/>
</SplideSlide>-->
        </Splide>
    </article>
</template>

<script>
import "@splidejs/vue-splide/css";

export default {
    name: "carouselComponent",
    data() {
        return {
            DOM: {},
            options: {
                drag: false,
                type: "loop",
                rewind: true,
                rewindByDrag: true,
                autoplay: false,
                keyboard: true,
                cover: true,
                arrows: false,
                pagination: false,
                heightRatio: 0.4,
                speed: 350,
                rewindSpeed: this.speed,
                easing: "cubic-bezier(0.25, 0, 0.25, 1)",
                interval: 7500,
            },
        };
    },
    methods: {
        updateDOM() {
            this.DOM = document.getElementById("carousel").innerHTML;
        },
    },
    beforeUnmount() {
        document.getElementById("carousel").innerHTML = this.DOM;
    },
};
</script>

<style lang="scss" scoped>
@import "node_modules/compass-mixins/lib/compass/css3";

article {
    .splide__slide {
        max-height: 700px;
        min-height: 450px;

        &::after {
            @include box-shadow(
                inset 0 175px 180px 0 var(--bg-color),
                inset 0 -175px 90px -30px var(--bg-color)
            );
            bottom: 0;
            content: "";
            height: calc(100% + 2px);
            left: 0;
            position: absolute;
            right: 0;
            top: -1px;
        }
    }

    article {
        height: 100%;
        margin-inline: auto;
        position: relative;
        width: min(100% - 2rem, 1350px);

        section {
            bottom: 22%;
            display: flex;
            flex-flow: column nowrap;
            gap: 4px;
            left: 0;
            position: absolute;
            z-index: 2;

            &:last-of-type {
                aspect-ratio: 1/1;
                border-radius: 8px;
                left: unset;
                overflow: hidden;
                position: absolute;
                right: 0;
                top: 26%;

                @media screen and (max-width: 680px) {
                    display: none;
                }

                video {
                    height: 100%;
                    object-fit: cover;
                    width: 100%;
                }
            }

            &:first-of-type {
                &::before {
                    background: rgb(38, 38, 38);
                    background: radial-gradient(
                        circle,
                        rgba(38, 38, 38, 1) 0%,
                        rgba(252, 70, 107, 0) 60%
                    );
                    content: "";
                    height: calc(100% + 300px);
                    left: -150px;
                    position: absolute;
                    top: -150px;
                    width: calc(100% + 300px);
                    z-index: -1;
                }

                & > p:first-of-type {
                    color: var(--subtext-color);
                    font-size: 1.4em;
                    text-shadow: 0 0 8px rgb(0, 0, 0);
                }

                & > p:last-of-type {
                    font-family: var(--title-font);
                    font-size: 3.6em;
                    font-weight: bold;
                    position: relative;
                    text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
                    text-transform: uppercase;
                }

                a {
                    margin: 20px 0 0;
                    padding: 8px 30px;
                    width: max-content;

                    svg {
                        margin-left: 10px;
                    }
                }

                .CEC {
                    text-align: left !important;

                    span {
                        font-size: 2.8em;
                        line-height: 0;
                        position: absolute;
                        right: 0;
                        transform: rotate(8deg);
                    }
                }

                #CEC4 {
                    span:first-of-type {
                        right: 0;
                    }

                    span:last-of-type {
                        font-size: 0.6em;
                        right: -50px;
                        top: 0;

                        &:before {
                            background-color: var(--bg-color);
                            border: 2px solid var(--special-color);
                            border-radius: 8px;
                            box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;
                            content: "";
                            height: 46px;
                            left: -11px;
                            position: absolute;
                            top: -25px;
                            width: 160px;
                            z-index: -1;

                            @media only screen and (max-width: 1300px) {
                                height: 40px;
                                top: -22px;
                                width: 136px;
                            }
                        }

                        @media only screen and (max-width: 450px) {
                            display: none;
                        }
                    }
                }

                @media only screen and (max-width: 1300px) {
                    bottom: 16%;

                    & > p:first-of-type {
                        color: var(--subtext-color);
                        font-size: 1.2em;
                        text-shadow: 0 0 8px rgb(0, 0, 0);
                    }

                    & > p:last-of-type {
                        font-family: var(--title-font);
                        font-size: 3em;
                        font-weight: bold;
                        position: relative;
                        text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
                        text-transform: uppercase;
                    }
                }

                @media only screen and (max-width: 450px) {
                    align-items: center;
                    height: calc(100% - 170px);
                    justify-content: center;
                    padding: 0 16px;
                    text-align: center;
                    width: 100%;

                    & > p:first-of-type {
                        color: var(--subtext-color);
                        font-size: 1.1em;
                        text-shadow: 0 0 8px rgb(0, 0, 0);
                    }

                    & > p:last-of-type {
                        font-family: var(--title-font);
                        font-size: 2.4em;
                        font-weight: bold;
                        position: relative;
                        text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
                        text-transform: uppercase;
                    }
                }
            }
        }

        img {
            bottom: 0;
            height: 80%;
            position: absolute;
            right: -16px;
            transform: rotate(12deg);
        }
    }
}
</style>
