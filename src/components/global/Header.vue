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

        <!-- Navigation PC -->
        <nav id="nav-pc">
          <router-link
            :to="{ name: 'home' }"
            :class="
              $route.path === '/' && current_link === 'home' ? 'current' : ''
            "
            >{{ $t("home") }}</router-link
          >
          <router-link
            to="/"
            :class="$route.path.startsWith('/tournament/') ? 'current' : ''"
          >
            {{ $t("tournaments.self") }}
            <font-awesome-icon icon="fa-solid fa-sort-down" />
            <!-- TODO: Tournament dropdown -->
          </router-link>
          <router-link
            to="/#association"
            :class="current_link === 'association' ? 'current' : ''"
            >{{ $t("association.self", 1) }}</router-link
          >
          <router-link
            to="/#contact"
            :class="current_link === 'contact' ? 'current' : ''"
            >{{ $t("contact.self") }}</router-link
          >
        </nav>

        <!-- Navigation Mobile -->
        <nav id="nav-mobile">
          <font-awesome-icon icon="fa-solid fa-bars" />
          <!-- TODO: Mobile menu -->
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

section:first-of-type #nav-pc > * {
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

#nav-mobile {
  height: $header-height;
  display: none;
  align-items: center;
  padding: 20px;

  & > svg {
    padding-bottom: 4px;
    font-size: 1.5em;
  }
}

#live {
  position: relative;

  i {
    //display: none;
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
  #nav-pc {
    display: none;
  }

  #nav-mobile {
    display: flex;
  }
}
</style>
