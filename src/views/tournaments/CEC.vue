<template>
  <main>
    <Banner
      :title="$t('tournaments.CEC.self')"
      src="assets/img/carousel/CEC/CEC_all.webp"
    />

    <div>
      <article id="presentation" class="content">
        <h2>{{ $t("presentation") }}</h2>
        <p>{{ $t("tournaments.CEC.presentation") }}</p>
      </article>

      <article id="list" class="content">
        <h2>{{ $t("tournaments.editions") }}</h2>
        <section>
          <router-link :to="{ name: 'CEC5' }">
            <div>
              <img
                src="@/assets/img/tournaments/CEC/CEC5.webp"
                :alt="$t('tournaments.CEC.5.self')"
              />
              <span>
                <i></i>
                <i></i>
              </span>
            </div>
            <p>{{ $t("tournaments.CEC.5.self") }}</p>
          </router-link>
          <router-link :to="{ name: 'CEC4' }">
            <div>
              <img
                src="@/assets/img/tournaments/CEC/CEC4.webp"
                :alt="$t('tournaments.CEC.4.self')"
              />
              <span>
                <i></i>
                <i></i>
              </span>
            </div>
            <p>{{ $t("tournaments.CEC.4.self") }}</p>
          </router-link>
          <router-link :to="{ name: 'CEC3' }">
            <div>
              <img
                src="@/assets/img/tournaments/CEC/CEC3.webp"
                :alt="$t('tournaments.CEC.3.self')"
              />
              <span>
                <i></i>
                <i></i>
              </span>
            </div>
            <p>{{ $t("tournaments.CEC.3.self") }}</p>
          </router-link>
          <router-link :to="{ name: 'CEC2' }">
            <div>
              <img
                src="@/assets/img/tournaments/CEC/CEC2.webp"
                :alt="$t('tournaments.CEC.2.self')"
              />
              <span>
                <i></i>
                <i></i>
              </span>
            </div>
            <p>{{ $t("tournaments.CEC.2.self") }}</p>
          </router-link>
          <router-link :to="{ name: 'CEC1' }">
            <div>
              <img
                src="@/assets/img/tournaments/CEC/CEC1.webp"
                :alt="$t('tournaments.CEC.1.self')"
              />
              <span>
                <i></i>
                <i></i>
              </span>
            </div>
            <p>{{ $t("tournaments.CEC.1.self") }}</p>
          </router-link>
        </section>
        <!--<router-link to="/" class="btn">{{ $t("load-more") }}</router-link>-->
      </article>
    </div>
  </main>
</template>

<script>
import Banner from "@/components/other/banner";

export default {
  name: "CECView",
  title() {
    return this.$t("tournaments.CEC.self");
  },
  components: {
    Banner,
  },
};
</script>

<style scoped lang="scss">
main > div {
  margin-top: 430px !important;
}

#presentation {
  padding-bottom: 1rem;

  p {
    font-size: 1.05em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

#list section {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 30px;

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
</style>
