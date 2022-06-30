<template>
  <article>
    <header>
      <div>
        <h2>{{ $t("ranking") }}</h2>
        <img :src="require(`@/assets/img/games/logo/${img}.webp`)" :alt="alt" />
      </div>
      <i></i>
      <img :src="require(`@/assets/img/games/banner/${img}.webp`)" :alt="alt" />
    </header>
    <section>
      <ul>
        <li>
          <div>
            <p>🥇</p>
            <p>Équipe</p>
          </div>
          <div>
            <p>Joueur</p>
            <p>Joueur</p>
            <p>Joueur</p>
          </div>
        </li>
        <li>
          <div>
            <p>🥈</p>
            <p>Équipe</p>
          </div>
          <div>
            <p>Joueur</p>
            <p>Joueur</p>
            <p>Joueur</p>
          </div>
        </li>
        <li>
          <div>
            <p>🥉</p>
            <p>Équipe</p>
          </div>
          <div>
            <p>Joueur</p>
            <p>Joueur</p>
            <p>Joueur</p>
          </div>
        </li>
        <li>
          <div>
            <p>4</p>
            <p>Équipe</p>
          </div>
          <div>
            <p>Joueur</p>
            <p>Joueur</p>
            <p>Joueur</p>
          </div>
        </li>
        <li>
          <div>
            <p>5</p>
            <p>Équipe</p>
          </div>
          <div>
            <p>Joueur</p>
            <p>Joueur</p>
            <p>Joueur</p>
          </div>
        </li>
        <li>
          <div>
            <p>6</p>
            <p>Équipe</p>
          </div>
          <div>
            <p>Joueur</p>
            <p>Joueur</p>
            <p>Joueur</p>
          </div>
        </li>
        <li>
          <div>
            <p>7</p>
            <p>Équipe</p>
          </div>
          <div>
            <p>Joueur</p>
            <p>Joueur</p>
            <p>Joueur</p>
          </div>
        </li>
        <li>
          <div>
            <p>8</p>
            <p>Équipe</p>
          </div>
          <div>
            <p>Joueur</p>
            <p>Joueur</p>
            <p>Joueur</p>
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: "tableComponent",
  props: ["img", "alt", "data"],
};
</script>

<style scoped lang="scss">
@import "node_modules/compass-mixins/lib/compass/css3";

article {
  header {
    position: relative;
    height: 128px;

    div {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 30px;

      h2 {
        margin: 0;
      }

      img {
        height: 70px;
        filter: drop-shadow(0 0 0.75rem var(--bg-color));
      }
    }

    i {
      z-index: -1;
      position: absolute;
      top: 0;
      width: 100%;
      height: calc(100% + 1px);
      @include box-shadow(inset 400px 0 230px -80px var(--bg-color));
    }

    & > img {
      border-radius: 8px;
      z-index: -2;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  section {
    ul {
      overflow-x: hidden;
      overflow-y: overlay;
      max-height: 350px;
      list-style: none;

      li {
        padding: 14px 30px 14px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.2em;

        & > * {
          display: flex;
          align-items: center;
          justify-content: space-between;

          &:first-of-type {
            gap: 16px;

            p:first-of-type {
              font-size: 1.6em;
              line-height: 0;
              text-align: center;
              width: 60px;
              font-family: var(--title-font);
              font-weight: bold;
            }
          }

          &:last-of-type {
            gap: 50px;
          }
        }

        &:first-of-type {
          padding: 28px 30px 28px 14px;
          font-size: 1.6em;
          font-family: var(--title-font);
          font-weight: bold;
          background-image: url("@/assets/svg/confettis.svg");
        }

        &:nth-child(even) {
          background-color: rgb(50, 50, 50);
        }
      }
    }
  }
}
</style>
