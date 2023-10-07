<template>
  <footer>
    <section class="content">
      <p>
        &copy; {{ current_year }}
        <router-link to="/">Alpes Esport</router-link>.
      </p>
      <p>{{ $t("copyright") }}.</p>
    </section>
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
footer {
  position: relative;
  padding: 24px 0;
  background-color: var(--bg-color);
  box-shadow: 0 -6px 10px -4px rgba(0, 0, 0, 0.7);

  section {
    padding: 0 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    font-family: var(--text-font);

    p {
      font-size: 0.84em;
      color: var(--footer-text-color);

      a {
        text-decoration: none;
        color: var(--footer-text-color);
        display: inline-flex;
        align-items: center;
        transition: color 150ms;
        text-transform: uppercase;

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  @media (max-width: 420px) {
    padding: 30px 0;
  }
}
</style>
