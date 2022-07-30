<template>
  <article class="content">
    <header>
      <div>
        <h2>{{ $t("ranking") }}</h2>
        <img :src="require(`@/assets/img/games/logo/${img}.webp`)" :alt="alt" />
      </div>
      <img :src="require(`@/assets/img/games/banner/${img}.webp`)" :alt="alt" />
    </header>
    <section>
      <ul>
        <li v-for="team in data" :key="team.id">
          <div>
            <p v-if="team.id === 1">🥇</p>
            <p v-else-if="team.id === 2">🥈</p>
            <p v-else-if="team.id === 3">🥉</p>
            <p v-else>{{ team.id }}</p>
            <p>{{ team.name }}</p>
          </div>
          <!--<div>
            <p v-for="player in team.players" :key="player">{{ player }}</p>
          </div>-->
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
  padding: 1.5rem 0;
  border-radius: 8px;

  header {
    z-index: 1;
    position: relative;
    height: 128px;

    &::after {
      z-index: -1;
      @include box-shadow(inset 400px 0 230px -80px var(--bg-color));
      height: calc(100% + 2px);
      content: "";
      position: absolute;
      top: -1px;
      right: 0;
      bottom: 0;
      left: 0;
    }

    div {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0 1.5rem;

      h2 {
        margin: 0;
      }

      img {
        height: 70px;
        filter: drop-shadow(0 0 0.75rem var(--bg-color));
      }

      @media (max-width: 650px) {
        justify-content: center;
      }
    }

    & > img {
      border-radius: 8px 8px 0 0;
      z-index: -1;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  section {
    border-radius: 0 0 8px 8px;
    box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;

    ul {
      overflow-x: hidden;
      overflow-y: overlay;
      max-height: 500px;
      border-radius: 0 0 8px 8px;

      li {
        padding: 14px 30px 14px 14px;
        font-size: 1.2em;
        display: flex;

        & > * {
          display: flex;
          align-items: center;

          p:first-of-type {
            font-size: 1.6em;
            line-height: 0;
            text-align: center;
            width: 60px;
            font-family: var(--title-font);
            font-weight: bold;
          }

          &:last-of-type {
            gap: 8px 1.5rem;
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
