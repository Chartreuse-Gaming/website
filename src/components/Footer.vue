<template>
  <footer>
    <div>
      <section>
        <p>
          &copy; {{ current_year }}
          <router-link to="/">CHARTREUSE GAMING</router-link>.
        </p>
        <p>{{ $t("copyright") }}.</p>
      </section>
      <nav>
        <router-link to="/">{{ $t("site-map") }}</router-link>
        <router-link to="/">{{ $t("legal-info") }}</router-link>
        <router-link to="/">{{ $t("intranet") }}</router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    current_year: function () {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped lang="scss">
$footer-height: 70px;
$font-size: 0.84em;

footer {
  position: relative;
  width: 100%;
  height: $footer-height;
  background-color: var(--bg-color);
  box-shadow: 0 -6px 10px -4px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;

  div {
    margin: 0 auto;
    max-width: 1400px;
    height: inherit;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & * {
      font-family: var(--title-font);
      color: var(--footer-text-color);
      text-decoration: none;
      transition: color 150ms;
    }

    section {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0 18px;
      gap: 0 4px;

      p {
        font-size: $font-size;

        a {
          height: $footer-height;
          display: inline-flex;
          align-items: center;
        }
      }
    }

    nav a {
      font-size: $font-size;
      height: $footer-height;
      display: inline-flex;
      align-items: center;
      padding: 18px;
    }

    a:hover {
      color: var(--subtext-color);
    }
  }
}

@media only screen and (max-width: 800px) {
  footer {
    height: auto;

    div {
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;

      section {
        padding: 0 12px;

        p a {
          padding: 8px 0;
          height: unset;
        }
      }

      nav a {
        padding: 8px 4vw;
        height: unset;
        flex-flow: column nowrap;
      }
    }
  }
}

@media only screen and (max-width: 380px) {
  footer div nav {
    display: flex;
    flex-flow: column nowrap;
    padding-top: 16px;
  }
}
</style>
