<template>
  <header>
    <article>
      <section>
        <!-- Logo -->
        <router-link to="/" id="logo">
          <img
            src="@/assets/svg/logo.svg"
            :alt="$t('association.logo') + '.'"
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
                :to="{ name: 'home' }"
                :class="
                  $route.path === '/' && current_link === 'home'
                    ? 'current'
                    : ''
                "
                @click="nav = false"
                >{{ $t("home") }}</router-link
              >
              <a
                id="dropdown"
                href=""
                :class="$route.path.startsWith('/tournament/') ? 'current' : ''"
                @mouseleave="dropdown = false"
                @click.prevent="dropdown = !dropdown"
              >
                {{ $t("tournaments.self") }}
                <font-awesome-icon icon="fa-solid fa-sort-down" />
                <transition name="fade">
                  <div v-if="dropdown">
                    <router-link
                      :to="{ name: 'CEC' }"
                      :class="
                        $route.path.startsWith('/tournament/CEC')
                          ? 'current'
                          : ''
                      "
                      @click="nav = false"
                    >
                      {{ $t("tournaments.CEC.self") }}
                    </router-link>
                    <router-link
                      :to="{ name: 'CGW_2019' }"
                      :class="
                        $route.path.startsWith('/tournament/CGW-2019')
                          ? 'current'
                          : ''
                      "
                      @click="nav = false"
                    >
                      {{ $t("tournaments.CGW_2019.self") }}
                    </router-link>
                  </div>
                </transition>
              </a>
              <router-link
                to="/#association"
                :class="current_link === 'association' ? 'current' : ''"
                @click.prevent="toAnchor('association')"
                >{{ $t("association.self", 1) }}</router-link
              >
              <router-link
                to="/#contact"
                :class="current_link === 'contact' ? 'current' : ''"
                @click.prevent="toAnchor('contact')"
                >{{ $t("contact.self") }}</router-link
              >
              <span @click.prevent="nav = false"></span>
            </div>
          </div>
        </nav>
      </section>

      <!-- Réseaux sociaux -->
      <section>
        <a href="https://discord.gg/invite/ENY2nV6">
          <font-awesome-icon icon="fa-brands fa-discord" />
        </a>
        <a id="live" href="https://www.twitch.tv/chartreusegaming">
          <font-awesome-icon icon="fa-brands fa-twitch" />
          <i></i>
          <i></i>
        </a>
        <a href="https://www.youtube.com/channel/UCJFJe1WVZtdQZuvkcS_2jSg">
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </a>
        <a href="https://twitter.com/chartreusegame">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
        <a href="https://www.instagram.com/chartreusegaming/">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
        <a href="https://www.facebook.com/chartreusegaming/">
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
        </a>
        <a href="https://www.linkedin.com/company/chartreuse-gaming/">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
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
    };
  },
  mounted() {
    const header = document.getElementsByTagName("header")[0];
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 100) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    };
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
  },
};
</script>

<style scoped lang="scss">
@import "../../../node_modules/compass-mixins/lib/compass/css3";
$header-height: 90px;

.scroll {
  @include box-shadow(inset 0 100px 90px -100px var(--bg-color));
  backdrop-filter: blur(8px);
  background-color: rgba(38, 38, 38, 0.6);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.appear {
  opacity: 1 !important;
  pointer-events: unset !important;
  user-select: unset !important;
  user-focus: unset !important;
}

header {
  z-index: 99;
  position: sticky;
  top: 0;
  left: 0;
  height: $header-height;
  transition: all 600ms;

  article {
    height: inherit;
    margin: 0 auto;
    padding: 0 12px;
    max-width: 1650px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    section {
      height: inherit;
      display: flex;
      align-items: center;

      a {
        color: var(--text-color);
        font-family: var(--title-font);
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        height: $header-height;
        display: inline-flex;
        align-items: center;
      }
    }
  }
}

section:first-of-type nav {
  #mobile {
    height: $header-height;
    display: none;
    padding: 0 20px;
    width: 30px;
  }

  #dropdown {
    position: relative;

    div {
      width: max-content;
      display: flex;
      flex-flow: column nowrap;
      position: absolute;
      bottom: -68px;
      left: 4px;
      background-color: var(--bg-color);
      border-radius: 8px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

      a {
        height: auto;
        padding: 8px 16px;

        &:first-of-type {
          padding-top: 16px;
        }

        &:last-of-type {
          padding-bottom: 16px;
        }
      }
    }
  }

  a {
    transition: color 150ms;
    padding: 20px;

    svg {
      margin-left: 8px;
      padding-bottom: 6px;
    }

    &:hover {
      color: var(--green-touch);

      svg {
        transition: color 150ms;
        color: var(--green-touch);
      }
    }
  }
}

section:last-of-type > a {
  padding: 18px;

  & > svg {
    transition: all 150ms;
    height: 20px;
    transform: scale(1);
  }

  &:hover {
    svg {
      transform: scale(1.1);
      color: var(--subtext-color);
    }
  }
}

.current {
  color: var(--green-touch);

  svg {
    color: var(--green-touch);
  }
}

#logo {
  height: $header-height;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

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

#live {
  position: relative;

  i {
    // TODO: Twitch API integration
    display: none;
    position: absolute;
    top: 30px;
    right: 14px;
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

@media only screen and (max-width: 1100px) {
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
    transition: opacity 0.2s ease-in-out;

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
        height: 80px;
      }

      #dropdown {
        width: 100%;
        justify-content: center;

        div {
          height: max-content;
          flex-flow: column nowrap;
          align-items: center;
          top: 70px;
          left: 0;
          border-radius: 0;
          width: 100vw;

          a {
            text-align: center;
            padding: 20px 12px;

            &:first-of-type {
              padding-top: 40px;
            }

            &:last-of-type {
              padding-bottom: 40px;
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
