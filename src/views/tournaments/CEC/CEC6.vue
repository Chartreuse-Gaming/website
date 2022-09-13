<template>
  <main>
    <Banner
      :title="$t('tournaments.CEC.6.self')"
      src="assets/img/carousel/CEC/CEC6.webp"
    />

    <article id="presentation" class="content">
      <h2>{{ $t("presentation") }}</h2>
      <p>{{ $t("tournaments.CEC.6.presentation") }}</p>
    </article>

    <article id="cash-prize" class="content">
      <h2>{{ $t("games") }}</h2>
      <div>
        <section>
          <header>
            <img
              src="@/assets/img/games/banner/League_of_Legends.webp"
              alt="League of Legends"
              loading="lazy"
            />
          </header>
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
            <a
              href="https://drive.google.com/file/d/1M1_Mr85IhaMMkHW8-YypOpcRFDUQzJNO/view?usp=sharing"
              class="btn"
            >
              {{ $t("regulation") }}
            </a>
            <a href="https://challonge.com/fr/CEC6_LOL" class="btn">
              {{ $t("registration") }}
            </a>
          </div>
        </section>
        <section>
          <header>
            <img
              src="@/assets/img/games/banner/Rocket_League.webp"
              alt="Rocket League"
              loading="lazy"
            />
          </header>
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
            <a
              href="https://drive.google.com/file/d/1d-hkNKFVxXByoFO5EezvKgppO7gm7s5_/view?usp=sharing"
              class="btn"
            >
              {{ $t("regulation") }}
            </a>
            <a href="https://challonge.com/fr/CEC6_RL" class="btn">
              {{ $t("registration") }}
            </a>
          </div>
        </section>
        <section>
          <header>
            <img
              src="@/assets/img/games/banner/Valorant.webp"
              alt="Valorant"
              loading="lazy"
            />
          </header>
          <div>
            <img
              src="@/assets/img/games/logo/Valorant.webp"
              alt="Logo Valorant"
              loading="lazy"
            />
            <h3><span>🥇</span>250 €</h3>
            <div>
              <p><span>🥈</span>200 €</p>
              <p><span>🥉</span>125 €</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1w_xYmoIipwf_pdF660A5pArMBPs0LWxV/view?usp=sharing"
              class="btn"
            >
              {{ $t("regulation") }}
            </a>
            <a href="https://challonge.com/fr/CEC6_VALORANT" class="btn">
              {{ $t("registration") }}
            </a>
          </div>
        </section>
      </div>
    </article>
  </main>
</template>

<script>
import Banner from "@/components/other/banner";
import rl from "@/assets/json/CEC/CEC5/rocket_league.json";
import cs from "@/assets/json/CEC/CEC5/counter_strike.json";
import lol from "@/assets/json/CEC/CEC5/league_of_legends.json";

export default {
  name: "CEC6View",
  title() {
    return this.$t("tournaments.CEC.6.self");
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
