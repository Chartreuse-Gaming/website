<template>
  <main>
    <Banner
      :title="$t('tournaments.CGW_2019.self')"
      src="assets/img/carousel/CGW_2019.webp"
    />

    <div>
      <article id="sponsors" class="content">
        <img src="@/assets/img/sponsors/Transfo.webp" alt="Transfo" />
        <img
          src="@/assets/img/sponsors/La_French_Tech_In_The_Alps.webp"
          alt="La French Tech In The Alps"
        />
        <img src="@/assets/img/sponsors/Casemate.webp" alt="Casemate" />
      </article>

      <article id="presentation" class="content">
        <h2>{{ $t("presentation") }}</h2>
        <p>{{ $t("tournaments.CGW_2019.presentation") }}</p>
      </article>

      <Table
        img="CSGO"
        alt="Counter Strike: Global Offensive"
        :data="ranking"
      />

      <Gallery :directory="gallery.directory" :images="gallery.images" />
    </div>
  </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Table from "@/components/other/table";
import Gallery from "@/components/other/gallery";
import cs from "@/assets/json/CGW_2019/counter_strike.json";

export default {
  name: "CGW2019View",
  title() {
    return this.$t("tournaments.CGW_2019.self");
  },
  components: {
    Banner,
    Table,
    Gallery,
  },
  data() {
    return {
      ranking: cs,
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
main > div {
  position: relative;
  top: -140px;
  margin-bottom: -120px;
}

#sponsors {
  padding: 20px 16px;
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
  background-color: var(--bg-color);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;

  img {
    max-width: 150px;
    max-height: 110px;
    padding: 8px;

    @media only screen and (max-width: 600px) {
      max-width: 120px;
      max-height: 90px;
    }
  }
}

#presentation {
  p {
    margin-bottom: 10px;
    font-size: 1.05em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
