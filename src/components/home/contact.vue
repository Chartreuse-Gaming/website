<template>
  <article class="content">
    <h2>{{ $t("contact.us") }}</h2>
    <section>
      <a href="mailto:chartreusegaming.contact@gmail.com">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        <p>chartreusegaming.contact@gmail.com</p>
      </a>
      <a href="tel:+33601225350">
        <font-awesome-icon icon="fa-solid fa-phone" />
        <p>+33 (0)6 01 22 53 50</p>
      </a>
      <div>
        <font-awesome-icon icon="fa-solid fa-share-nodes" />
        <span>
          <a href="https://discord.gg/invite/ENY2nV6">
            <font-awesome-icon icon="fa-brands fa-discord" />
          </a>
          <a href="https://twitter.com/chartreusegame">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </a>
          <a href="https://www.facebook.com/chartreusegaming/">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a>
          <a href="https://www.instagram.com/chartreusegaming/">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
        </span>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "contactComponent",
};
</script>

<style scoped lang="scss">
article {
  padding: 1.5rem;
  width: min(100% - 2rem, 1200px);
  border-radius: 8px 8px 0 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;

  section {
    display: grid;
    gap: 2.5rem 1.5rem;
    grid-template-columns: repeat(3, 1fr);

    & > * {
      display: inline-grid;
      justify-items: center;
      gap: 1rem;
      color: white;
      text-decoration: none;

      & > svg {
        height: 46px;
        color: var(--bg-color);
        stroke: var(--green-touch);
        stroke-width: 26px;
      }

      span a {
        padding: 12px;
        color: white;

        & > svg {
          transition: all 150ms;
          height: 22px;
          transform: scale(1);
        }

        &:hover {
          svg {
            transform: scale(1.1);
            color: var(--subtext-color);
          }
        }
      }
    }

    @media (min-width: 501px) and (max-width: 800px) {
      & > a:first-of-type {
        grid-column: span 2;
      }

      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;

      span a {
        padding: 16px;
      }
    }
  }
}

@media (max-width: 650px) {
  .content {
    width: 100%;
  }
}
</style>
