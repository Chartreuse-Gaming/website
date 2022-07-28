<template>
  <article class="content">
    <h2>{{ $t("tournaments.previous") }}</h2>
    <section>
      <router-link :to="{ name: 'CEC5' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC/CEC5.webp"
            :alt="$t('tournaments.CEC.5.self')"
          />
          <i></i>
        </div>
        <p>{{ $t("tournaments.CEC.5.self") }}</p>
      </router-link>
      <router-link :to="{ name: 'CEC4' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC/CEC4.webp"
            :alt="$t('tournaments.CEC.4.self')"
          />
          <i></i>
        </div>
        <p>{{ $t("tournaments.CEC.4.self") }}</p>
      </router-link>
      <router-link :to="{ name: 'CEC3' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC/CEC3.webp"
            :alt="$t('tournaments.CEC.3.self')"
          />
          <i></i>
        </div>
        <p>{{ $t("tournaments.CEC.3.self") }}</p>
      </router-link>
      <router-link :to="{ name: 'CGW_2019' }">
        <div>
          <img
            src="@/assets/img/tournaments/CGW_2019.webp"
            :alt="$t('tournaments.CGW_2019.self')"
          />
          <i></i>
        </div>
        <p>{{ $t("tournaments.CGW_2019.self") }}</p>
      </router-link>
      <router-link :to="{ name: 'CEC2' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC/CEC2.webp"
            :alt="$t('tournaments.CEC.2.self')"
          />
          <i></i>
        </div>
        <p>{{ $t("tournaments.CEC.2.self") }}</p>
      </router-link>
      <router-link :to="{ name: 'CEC1' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC/CEC1.webp"
            :alt="$t('tournaments.CEC.1.self')"
          />
          <i></i>
        </div>
        <p>{{ $t("tournaments.CEC.1.self") }}</p>
      </router-link>
    </section>
    <!--<router-link to="/" class="btn">{{ $t("load-more") }}</router-link>-->
  </article>
</template>

<script>
export default {
  name: "oldTournamentComponent",
};
</script>

<style scoped lang="scss">
article {
  padding-top: 20px;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2.5rem;

    a {
      flex: 0 1 calc(100% / 3 - 1.7rem);
      text-decoration: none;
      color: var(--text-color);
      font-size: 1.22em;

      div {
        position: relative;
        margin-bottom: 1em;

        * {
          display: block;
          border-radius: 8px;
        }

        img {
          width: 100%;
          height: 100%;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }

        i {
          z-index: -1;
          width: calc(100% - 2px);
          height: calc(100% - 2px);
          transform: rotate(0);
          transition: transform 400ms;
          position: absolute;
          top: 1px;
          left: 1px;
          border: 5px solid var(--green-touch);
          background-color: var(--bg-color);
        }

        &:hover i {
          transform: rotate(-5deg);
        }
      }

      @media (max-width: 880px) {
        flex-basis: calc(100% / 2 - 1.25rem);
      }

      @media (max-width: 580px) {
        flex-basis: 100%;
      }
    }
  }
}

.btn {
  margin-top: 3em;
}
</style>
