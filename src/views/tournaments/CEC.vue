<template>
  <main>
    <Banner
      :title="$t('tournaments.CEC.self')"
      src="assets/img/carousel/CEC/CEC_all.webp"
    />

    <article id="presentation" class="content">
      <h2>{{ $t("presentation") }}</h2>
      <p>{{ $t("tournaments.CEC.presentation") }}</p>
    </article>

    <Tournaments :data="tournaments" />
  </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Tournaments from "@/components/home/tournaments";

export default {
  name: "CECView",
  title() {
    return this.$t("tournaments.CEC.self");
  },
  components: {
    Banner,
    Tournaments,
  },
  data() {
    return {
      tournaments: {
        title: this.$t("tournaments.editions"),
        links: [
          {
            name: "CEC5",
            title: this.$t("tournaments.CEC.5.self"),
            img: "assets/img/tournaments/CEC/CEC5.webp",
          },
          {
            name: "CEC4",
            title: this.$t("tournaments.CEC.4.self"),
            img: "assets/img/tournaments/CEC/CEC4.webp",
          },
          {
            name: "CEC3",
            title: this.$t("tournaments.CEC.3.self"),
            img: "assets/img/tournaments/CEC/CEC3.webp",
          },
          {
            name: "CEC2",
            title: this.$t("tournaments.CEC.2.self"),
            img: "assets/img/tournaments/CEC/CEC2.webp",
          },
          {
            name: "CEC1",
            title: this.$t("tournaments.CEC.1.self"),
            img: "assets/img/tournaments/CEC/CEC1.webp",
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
main {
  margin-top: -90px;

  #presentation {
    padding: 0 0 1rem;

    p {
      font-size: 1.1em;
    }
  }
}
</style>
