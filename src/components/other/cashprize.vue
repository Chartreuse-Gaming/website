<template>
  <article class="content">
    <h2>{{ $t("games") }}</h2>
    <div>
      <section v-for="game in data" :key="game.name">
        <header>
          <img
            :src="require('@/assets/img/games/banner/' + game.image)"
            :alt="game.name"
            loading="lazy"
          />
        </header>
        <div>
          <img
            :src="require('@/assets/img/games/logo/' + game.image)"
            :alt="game.name + 'logo'"
            loading="lazy"
          />
          <h3><span>🥇</span>{{ game.cash[0] }} €</h3>
          <div>
            <p><span>🥈</span>{{ game.cash[1] }} €</p>
            <p><span>🥉</span>{{ game.cash[2] }} €</p>
            <p v-if="game.cash[3]"><span>4</span>{{ game.cash[3] }} €</p>
          </div>
          <a :href="game.regulation" class="btn">
            {{ $t("regulation") }}
          </a>
          <a :href="game.registration" class="btn">
            {{ $t("registration") }}
          </a>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: "cashprizeComponent",
  props: ["data"],
};
</script>

<style scoped lang="scss">
@import "node_modules/compass-mixins/lib/compass/css3";

article {
  padding-bottom: 0 !important;

  > div {
    border-radius: 6px;
    display: flex;
    flex-flow: row wrap;
    gap: 3rem 0;

    > section {
      flex: 1 1 calc(100% / 3);

      &:first-child header img {
        border-radius: 6px 0 0 0;
      }

      &:last-child header img {
        border-radius: 0 6px 0 0;
      }

      > header {
        @include box-shadow(inset 0px -116px 40px -50px var(--bg-color));

        img {
          z-index: -1;
          object-fit: cover;
          width: 100%;
          height: 200px;
          position: relative;
        }
      }

      > div {
        transform: translateY(-50px);
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        margin: 0 1rem;

        img {
          object-fit: contain;
          width: 300px;
          height: 90px;

          @media only screen and (max-width: 400px) {
            width: 100%;
          }
        }

        h3 {
          margin-top: 2.4rem;
          padding: 1rem 2rem 1.2rem;
          border-radius: 6px;
          font-size: 2em;
          font-family: var(--title-font);
          display: inline-flex;
          align-items: baseline;
          gap: 0.8rem;
          box-shadow: rgba(0, 0, 0, 0.4) 0 4px 18px 0;
          position: relative;
          background-color: var(--bg-color);
          color: var(--green-touch);
          inline-size: max-content;

          &::before {
            z-index: -2;
            content: "";
            border-radius: 6px;
            background-color: var(--green-touch);
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            transform: rotate(-6deg);
          }

          &::after {
            z-index: -1;
            content: "";
            border-radius: 4px;
            background-color: var(--bg-color);
            position: absolute;
            top: 4px;
            left: 4px;
            bottom: 4px;
            right: 4px;
            transform: rotate(-6deg);
          }
        }

        > div {
          margin: 2.4rem 0;
          display: flex;
          flex-flow: row wrap;
          align-items: baseline;
          justify-content: space-between;
          width: 95%;

          p {
            font-family: var(--title-font);
            font-size: 1.6em;
            font-weight: bold;
            display: inline-flex;
            align-items: baseline;
            gap: 0.4rem;

            &:last-of-type span {
              height: 34px;
              width: 35px;
              font-size: 0.85em;
              text-align: center;
              color: var(--green-touch);
            }
          }

          @media only screen and (max-width: 1250px) {
            justify-content: center;
            gap: 0.8rem 0;

            p {
              flex: 1 1 calc(100% / 2);
              justify-content: center;
            }
          }

          @media only screen and (max-width: 350px) {
            p {
              flex: 1 1 100%;
            }
          }
        }

        > a:first-of-type {
          margin-bottom: 0.8rem;
          background-color: #656565;
        }
      }
    }
  }
}
</style>
