<template>
  <main>
    <Banner
      :title="$t('tournaments.CEC.6.self')"
      src="assets/img/carousel/CEC/CEC6.webp"
    />

    <article id="teaser" class="content">
      <iframe
        width="852"
        height="480"
        src="https://www.youtube.com/embed/lso8jmnlcFU?controls=0"
        frameborder="0"
        allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </article>

    <article id="presentation" class="content">
      <h2>{{ $t("presentation") }}</h2>
      <p>{{ $t("tournaments.CEC.6.presentation") }}</p>
    </article>

    <article id="cash-prize" class="content">
      <section>
        <img
          src="@/assets/img/games/banner/League_of_Legends.webp"
          alt="League of Legends"
          loading="lazy"
        />
        <div>
          <img
            src="@/assets/img/games/logo/League_of_Legends.webp"
            alt="Logo League of Legends"
            loading="lazy"
          />
          <h3><span>🥇</span>250 €</h3>
          <div>
            <p><span>🥈</span>200 €</p>
            <p><span>🥉</span>125 €</p>
          </div>
          <a href="#" class="btn">
            {{ $t("read-more") }}
            <font-awesome-icon icon="fa-solid fa-right-long" />
          </a>
        </div>
      </section>
      <section>
        <img
          src="@/assets/img/games/banner/CSGO.webp"
          alt="Valorant"
          loading="lazy"
        />
        <div>
          <img
            src="@/assets/img/games/logo/CSGO.webp"
            alt="Logo Valorant"
            loading="lazy"
          />
          <h3><span>🥇</span>250 €</h3>
          <div>
            <p><span>🥈</span>200 €</p>
            <p><span>🥉</span>125 €</p>
          </div>
          <a href="#" class="btn">
            {{ $t("read-more") }}
            <font-awesome-icon icon="fa-solid fa-right-long" />
          </a>
        </div>
      </section>
      <section>
        <img
          src="@/assets/img/games/banner/Rocket_League.webp"
          alt="Rocket League"
          loading="lazy"
        />
        <div>
          <img
            src="@/assets/img/games/logo/Rocket_League.webp"
            alt="Logo Rocket League"
            loading="lazy"
          />
          <h3><span>🥇</span>150 €</h3>
          <div>
            <p><span>🥈</span>120 €</p>
            <p><span>🥉</span>75 €</p>
          </div>
          <a href="#" class="btn">
            {{ $t("read-more") }}
            <font-awesome-icon icon="fa-solid fa-right-long" />
          </a>
        </div>
      </section>
    </article>

    <!--<Gallery :images="images" />-->
  </main>
</template>

<script>
import Banner from "@/components/other/banner";
import rl from "@/assets/json/CEC/CEC5/rocket_league.json";
import cs from "@/assets/json/CEC/CEC5/counter_strike.json";
import lol from "@/assets/json/CEC/CEC5/league_of_legends.json";

export default {
  name: "CEC5View",
  title() {
    return this.$t("tournaments.CEC.5.self");
  },
  components: {
    Banner,
  },
  data() {
    return {
      ranking: {
        rl: rl,
        cs: cs,
        lol: lol,
      },
      images: [""],
    };
  },
};
</script>

<style scoped lang="scss">
@import "node_modules/compass-mixins/lib/compass/css3";

#presentation {
  padding-top: 0;
}

#cash-prize {
  border-radius: 6px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  section {
    &:first-child img {
      border-radius: 6px 0 0 0;
    }
    &:last-child img {
      border-radius: 0 6px 0 0;
    }

    > img {
      object-fit: cover;
      width: 100%;
      height: 180px;
    }

    > div {
      transform: translateY(-50px);
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      gap: 3rem;

      img {
        margin-inline: auto;
      }

      h3 {
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
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;

        p {
          font-family: var(--title-font);
          font-size: 1.6em;
          font-weight: bold;
          display: inline-flex;
          align-items: baseline;
          gap: 0.4rem;
        }
      }
    }
  }
}
</style>
