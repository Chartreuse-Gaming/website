<template>
  <article class="content">
    <h2>{{ $t("tournaments.previous") }}</h2>
    <section>
      <router-link :to="{ name: 'CEC5' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC_5.webp"
            :alt="$t('CEC5.self')"
          />
          <span>
            <i></i>
            <i></i>
          </span>
        </div>
        <p>{{ $t("CEC5.self") }}</p>
      </router-link>
      <router-link :to="{ name: 'CEC4' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC_4.webp"
            :alt="$t('CEC4.self')"
          />
          <span>
            <i></i>
            <i></i>
          </span>
        </div>
        <p>{{ $t("CEC4.self") }}</p>
      </router-link>
      <router-link :to="{ name: 'CEC3' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC_3.webp"
            :alt="$t('CEC3.self')"
          />
          <span>
            <i></i>
            <i></i>
          </span>
        </div>
        <p>{{ $t("CEC3.self") }}</p>
      </router-link>
      <router-link :to="{ name: 'CGW_2019' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC_3.webp"
            :alt="$t('CGW_2019.self')"
          />
          <span>
            <i></i>
            <i></i>
          </span>
        </div>
        <p>{{ $t("CGW_2019.self") }}</p>
      </router-link>
      <router-link :to="{ name: 'CEC2' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC_3.webp"
            :alt="$t('CEC2.self')"
          />
          <span>
            <i></i>
            <i></i>
          </span>
        </div>
        <p>{{ $t("CEC2.self") }}</p>
      </router-link>
      <router-link :to="{ name: 'CEC1' }">
        <div>
          <img
            src="@/assets/img/tournaments/CEC_3.webp"
            :alt="$t('CEC1.self')"
          />
          <span>
            <i></i>
            <i></i>
          </span>
        </div>
        <p>{{ $t("CEC1.self") }}</p>
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
  padding-top: 16px;

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 30px;
    margin-bottom: 16px;

    a {
      flex: 0 1 calc(100% / 3 - 20px);
      text-decoration: none;
      color: var(--text-color);
      font-size: 1.2em;
      padding: 16px;

      div {
        position: relative;
        width: 100%;
        margin-bottom: 24px;

        & * {
          aspect-ratio: 16/9;
          border-radius: 8px;
        }

        img {
          width: 100%;
          height: 100%;
          display: block;
          position: relative;
          z-index: 3;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }

        span i {
          width: calc(100% - 2px);
          height: calc(100% - 2px);
          transform: rotate(0);
          transition: transform 400ms;
          position: absolute;
          top: 1px;
          left: 1px;
          display: block;

          &:first-of-type {
            z-index: 2;
            margin: 5px;
            width: calc(100% - 12px);
            height: calc(100% - 12px);
            background-color: var(--bg-color);
            border-radius: 6px;
          }

          &:last-of-type {
            z-index: 1;
            background-color: var(--green-touch);
          }
        }
      }

      &:hover span i {
        transform: rotate(-5deg);
      }

      @media only screen and (max-width: 920px) {
        flex-basis: calc(100% / 2 - 20px);
      }

      @media only screen and (max-width: 540px) {
        flex-basis: 100%;
      }
    }
  }
}
</style>
