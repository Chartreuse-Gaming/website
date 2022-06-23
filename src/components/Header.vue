<template>
  <header>
    <article>
      <section>
        <!-- Logo -->
        <router-link to="/" id="logo">
          <img
            src="@/assets/svg/logo.svg"
            :alt="$t('logo-association') + '.'"
          />
        </router-link>

        <!-- Navigation PC -->
        <nav id="nav-pc">
          <router-link to="/" :class="$route.path === '/' ? 'current' : ''">{{
            $t("home")
          }}</router-link>
          <router-link to="/">
            {{ $t("tournaments") }}
            <font-awesome-icon icon="fa-solid fa-sort-down" />
            <!-- TODO: Tournament dropdown -->
          </router-link>
          <router-link to="/#association">{{ $t("association") }}</router-link>
          <router-link to="/#contact">{{ $t("contact") }}</router-link>
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
        <a href="https://www.twitch.tv/chartreusegaming">
          <font-awesome-icon icon="fa-brands fa-twitch" />
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
};
</script>

<style scoped lang="scss">
$header-height: 90px;

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: $header-height;

  article {
    height: inherit;
    margin: 0 auto;
    max-width: 1600px;
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

@media only screen and (max-width: 1050px) {
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
