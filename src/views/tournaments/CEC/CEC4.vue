<template>
  <main>
    <Banner
      :title="$t('tournaments.CEC.4.self')"
      src="assets/img/carousel/CEC/CEC4.webp"
    />

    <div class="banner-content">
      <article id="sponsors" class="content">
        <img
          src="@/assets/img/sponsors/Coeur_de_Chartreuse.webp"
          alt="Coeur de Chartreuse"
        />
        <img
          src="@/assets/img/sponsors/Saint_Laurent_du_Pont.webp"
          alt="Saint Laurent du Pont"
        />
        <img
          src="@/assets/img/sponsors/Rocket_Baguette.webp"
          alt="Rocket Baguette"
        />
        <img
          src="@/assets/img/sponsors/Inova_Construction.webp"
          alt="Inova Construction"
        />
        <img
          src="@/assets/img/sponsors/Inov_Concept.webp"
          alt="Inov' Concept"
        />
      </article>

      <article id="presentation" class="content">
        <h2>{{ $t("presentation") }}</h2>
        <p>{{ $t("tournaments.CEC.4.presentation") }}</p>
      </article>

      <Table img="Rocket_League" alt="Rocket League" :data="ranking" />

      <!--<Gallery :directory="gallery.directory" :images="gallery.images" />-->
    </div>
  </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Table from "@/components/other/table";
import rl from "@/assets/json/CEC/CEC4/rocket_league.json";

export default {
  name: "CEC4View",
  title() {
    return this.$t("tournaments.CEC.4.self");
  },
  components: {
    Banner,
    Table,
  },
  data() {
    return {
      ranking: rl,
      gallery: {
        directory: "https://unpkg.com/vue-my-photos@1.0.0/src/assets/",
        images: [
          {
            name: "mountains.jpg",
            alt: "The Dolomites",
            id: "image1",
          },

          {
            name: "bird.jpg",
            alt: "It is a bird on a tree!",
            id: "image2",
          },

          {
            name: "alps.jpg",
            alt: "I will live here someday",
            id: "image3",
          },

          {
            name: "bear.jpg",
            alt: "Friendly bear",
            id: "image4",
          },

          {
            name: "canyon.jpg",
            alt: "A worthy hike",
            id: "image5",
          },

          {
            name: "monumentvalley.jpg",
            alt: "Monument Valley",
            id: "image6",
          },

          {
            name: "puppy.jpg",
            alt: "Puppy with a feather",
            id: "image7",
          },

          {
            name: "redwoods.jpg",
            alt: "Foggy evening in the Redwoods",
            id: "image8",
          },
        ],
      },
    };
  },
};
</script>
