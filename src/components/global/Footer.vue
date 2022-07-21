<template>
  <footer>
    <div class="content">
      <section>
        <p>
          &copy; {{ current_year }}
          <router-link to="/">CHARTREUSE GAMING</router-link>.
        </p>
        <p>{{ $t("copyright") }}.</p>
      </section>
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
$footer-height: 50px;
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
    padding: 12px;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

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
  }
}

@media only screen and (max-width: 800px) {
  footer {
    height: auto;

    div section p a {
      padding: 8px 0;
      height: unset;
    }
  }
}

@media only screen and (max-width: 400px) {
  footer div {
    text-align: center;

    section {
      flex-flow: column nowrap;
    }
  }
}
</style>
