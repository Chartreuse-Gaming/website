<template>
  <main>
    <Banner
      :title="$t('tournaments.CEC.1.self')"
      src="assets/img/carousel/CEC/CEC1.webp"
    />

    <div>
      <article id="presentation" class="content">
        <h2>{{ $t("presentation") }}</h2>
        <p>{{ $t("tournaments.CEC.1.presentation") }}</p>
      </article>

      <Table img="League_of_Legends" alt="League of Legends" :data="ranking" />

      <!--<Gallery :directory="gallery.directory" :images="gallery.images" />-->
    </div>
  </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Table from "@/components/other/table";
import lol from "@/assets/json/CEC/CEC1/league_of_legends.json";

export default {
  name: "CEC1View",
  title() {
    return this.$t("tournaments.CEC.1.self");
  },
  components: {
    Banner,
    Table,
  },
  data() {
    return {
      ranking: lol,
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

<style scoped lang="scss">
#presentation {
  padding-top: 1rem;
}
</style>
