<template>
  <article class="content">
    <header>
      <div>
        <h2>{{ $t("ranking") }}</h2>
        <img
          :src="require(`@/assets/img/games/logo/${img}.webp`)"
          :alt="alt"
          loading="lazy"
        />
      </div>
      <img
        :src="require(`@/assets/img/games/banner/${img}.webp`)"
        :alt="alt"
        loading="lazy"
      />
    </header>
    <section>
      <ul>
        <li
          v-for="(team, index) in data"
          :key="index"
          @click="togglePlayers(index)"
        >
          <p v-if="team.rank === 1">🥇</p>
          <p v-else-if="team.rank === 2">🥈</p>
          <p v-else-if="team.rank === 3">🥉</p>
          <p v-else>{{ team.rank }}</p>
          <transition mode="out-in">
            <p v-if="!toggleTeams[index]">{{ team.name }}</p>
            <p v-else>
              <span v-for="player in team.players" :key="player">
                {{ player }}
              </span>
            </p>
          </transition>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: "tableComponent",
  props: ["img", "alt", "data"],
  data() {
    return {
      toggleTeams: [],
    };
  },
  mounted() {
    this.data.forEach(() => this.toggleTeams.push(false));
  },
  methods: {
    togglePlayers(id) {
      if (this.data[id].players.length > 1) {
        this.toggleTeams[id] = !this.toggleTeams[id];
      }
    },
  },
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
      height: inherit;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0 1.5rem;

      h2 {
        margin: 0;
      }

      img {
        height: 50%;
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
      background-color: var(--bg-color);

      li {
        padding: 1rem;
        font-size: 1.2em;
        display: flex;
        align-items: center;
        gap: 1rem;

        p:first-of-type {
          font-size: 1.6em;
          line-height: 0;
          text-align: center;
          min-width: 60px;
          font-family: var(--title-font);
          font-weight: bold;
        }

        p:last-of-type {
          display: flex;
          flex-flow: row wrap;
          gap: 0.2rem 1rem;
        }

        &:first-of-type {
          padding: 2rem 1rem;
          font-size: 1.6em;
          font-family: var(--title-font);
          font-weight: bold;
          background-image: url("@/assets/svg/confettis.svg");
          color: var(--special-color);
        }

        &:nth-child(even) {
          backdrop-filter: brightness(1.3);
        }
      }
    }
  }
}

.v-enter-active {
  transition: all 300ms;
}

.v-leave-active {
  transition: all 220ms cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
