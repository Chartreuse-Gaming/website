<template>
  <article class="content">
    <h2>{{ $t("contact.us") }}</h2>
    <section>
      <a href="tel:+33601225350">
        <font-awesome-icon icon="fa-solid fa-phone" />
        <p>+33 6 01 22 53 50</p>
      </a>
      <a href="mailto:chartreusegaming.contact@gmail.com">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        <p>chartreusegaming.contact@gmail.com</p>
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
  padding: 20px;
  background-color: var(--bg-color);
  width: 100%;
  max-width: 1200px;
  border-radius: 8px 8px 0 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    & > * {
      flex: 1 0 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: stretch;
      gap: 16px;
      text-align: center;
      padding: 16px;
      color: white;
      text-decoration: none;

      & > * {
        height: 50px;
        display: flex;
        align-items: center;
      }

      & > svg {
        color: var(--bg-color);
        stroke: var(--green-touch);
        stroke-width: 26px;
        stroke-linejoin: round;
      }

      span a {
        padding: 10px;
        color: white;

        & > svg {
          transition: all 150ms;
          height: 24px;
          transform: scale(1);
        }

        &:hover {
          svg {
            transform: scale(1.1);
            color: var(--subtext-color);
          }
        }

        @media only screen and (max-width: 350px) {
          padding: 5vw;
        }
      }
    }

    @media only screen and (max-width: 800px) {
      justify-content: space-between;

      & > * {
        flex-direction: column;
        flex: 1 1 calc(50% - 40px);

        &:last-child span {
          width: 100%;
          justify-content: center;
        }

        p {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;

      div {
        flex: 1 0 100%;
      }

      span a {
        padding: 20px;
      }
    }
  }
}
</style>
