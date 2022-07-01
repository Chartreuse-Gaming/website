<template>
  <main>
    <Banner
      title="Chartreuse Esport Contest 4 Online"
      img_src="assets/img/carousel/CEC_4.webp"
      img_alt="Chartreuse Esport Contest 4 Online"
    />

    <div>
      <article id="sponsors" class="content">
        <img src="@/assets/img/sponsors/FullLife.webp" alt="FullLife" />
        <img
          src="@/assets/img/sponsors/Drone_Process.webp"
          alt="Drone Process"
        />
        <img src="@/assets/img/sponsors/Noctua.webp" alt="Noctua" />
        <img
          src="@/assets/img/sponsors/Coeur_de_Chartreuse.webp"
          alt="Coeur de Chartreuse"
        />
        <img
          src="@/assets/img/sponsors/Saint_Laurent_du_Pont.webp"
          alt="Saint Laurent du Pont"
        />
      </article>

      <article id="presentation" class="content">
        <h2>{{ $t("presentation") }}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo,
          dui eget bibendum tristique, leo sem pellentesque diam, facilisis
          aliquet tortor mauris in nunc. Nulla vulputate, enim nec laoreet
          tincidunt, ipsum est luctus ligula, a convallis purus diam in risus.
          Praesent a mauris ut nunc consectetur ullamcorper. Donec diam odio,
          dignissim sit amet felis sed, aliquam tincidunt odio. Aliquam iaculis
          nulla id blandit efficitur. Quisque nec mauris eu est porttitor
          sagittis. In hac habitasse platea dictumst. Donec cursus congue ex ac
          facilisis.
        </p>
        <p>
          Nulla mattis eros eu sem blandit, elementum feugiat mauris gravida.
          Etiam suscipit, sem eu luctus aliquet, leo arcu scelerisque nulla, ut
          hendrerit enim turpis ut sem. Cras risus orci, dapibus quis imperdiet
          et, imperdiet ac dolor. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Morbi dignissim porta odio,
          eu auctor mauris consectetur non. Aenean dui nisi, interdum eget mi
          quis, venenatis luctus justo. Etiam blandit luctus justo ac tincidunt.
        </p>
        <p>
          Nullam dignissim ultricies quam, a gravida nulla porttitor eget.
          Integer eget sapien ut enim porta porttitor. Quisque tristique a leo
          in aliquet. Pellentesque et pharetra ante. Fusce ac molestie magna.
          Sed non ex vel risus commodo vestibulum. Integer at lacinia risus. Ut
          at tincidunt urna. Maecenas vestibulum imperdiet tortor sit amet
          molestie. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Vivamus pretium viverra ante. Nam sed
          felis ornare, pharetra ex a, iaculis tortor. Donec feugiat suscipit
          erat rhoncus dignissim. Sed congue velit sit amet dui vehicula, non
          rutrum erat ultrices.
        </p>
      </article>

      <Table img="Rocket_League" alt="Rocket League" :data="ranking" />

      <Gallery :directory="gallery.directory" :images="gallery.images" />
    </div>
  </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Table from "@/components/other/table";
import Gallery from "@/components/other/gallery";

export default {
  name: "CEC5View",
  title: "Chartreuse Esport Contest 5",
  components: {
    Banner,
    Table,
    Gallery,
  },
  data() {
    return {
      ranking: [
        {
          id: 1,
          name: "CALIENTE",
          players: ["saizen", "pryyme"],
        },
        {
          id: 2,
          name: "Camenfrites",
          players: ["Grimflam", "Reijin"],
        },
        {
          id: 3,
          name: "CiNOZE",
          players: ["DGZ", "FrotteMan"],
        },
        {
          id: 4,
          name: "Les Mini-Retraités",
          players: ["Rizdax", "Zodark"],
        },
        {
          id: 5,
          name: "Valderium",
          players: ["Hydrese", "Deïta"],
        },
        {
          id: 5,
          name: "VF",
          players: ["Måmøk", "Mah Ke Sim"],
        },
        {
          id: 5,
          name: "K2k_gang",
          players: ["Nefariouz83", "VCT_GaminG"],
        },
        {
          id: 5,
          name: "Heternaze",
          players: ["Neova", "Arouf Gros tas"],
        },
        {
          id: 9,
          name: "Heternaze",
          players: ["Major", "TU ES MORT NON"],
        },
        {
          id: 9,
          name: "Old Boys",
          players: ["Flow_Flo74", "Veloxity"],
        },
        {
          id: 9,
          name: "Ergüel Performance Gaming Club",
          players: ["H5-N1", "xMeta Legend Online"],
        },
        {
          id: 9,
          name: "NewRange",
          players: ["NewRange Stock/-\\ge.", "1v1 God"],
        },
        {
          id: 9,
          name: "Rocket Park",
          players: ["SciHype", "Aubaboul"],
        },
        {
          id: 9,
          name: "SKAALS SOCIETY",
          players: ["Pazzaaar", "Gatchou"],
        },
        {
          id: 9,
          name: "ESCR1",
          players: ["Ponponce", "Grumphi"],
        },
        {
          id: 9,
          name: "Vanadium",
          players: ["Miro_", "VinsElBins"],
        },
        {
          id: 17,
          name: "Bayern les verres cul sec",
          players: ["DraZz0u", "Anisse ."],
        },
        {
          id: 17,
          name: "French Army",
          players: ["SkySoft38", "Darkrodoux"],
        },
        {
          id: 17,
          name: "Ultimatum top 1 fortnite chartreuse gaming 2020",
          players: ["ACG MasSS", "ACG ĶŲŘĀMĀ"],
        },
        {
          id: 17,
          name: "667",
          players: ["TXpr0Wwzz", "Alan.clemot2"],
        },
        {
          id: 17,
          name: "Les Maitres Kebabiers",
          players: ["bobyfunk", "Chapericube"],
        },
        {
          id: 17,
          name: "Engel Esport",
          players: ["KaiiZiX", "Egl Flixxx"],
        },
        {
          id: 17,
          name: "La Houille",
          players: ["La Mangue", "Samy"],
        },
        {
          id: 17,
          name: "Grumeaux",
          players: ["NaZuRo-_23", "PendaMafieux"],
        },
        {
          id: 17,
          name: "Oui",
          players: ["JunkieCat", "Athab"],
        },
        {
          id: 17,
          name: "PouletEnFeu",
          players: ["Xelium_Poulet", "X_phoenix42_X"],
        },
        {
          id: 17,
          name: "MN'S",
          players: ["the_noob.73", "geekounette27"],
        },
        {
          id: 17,
          name: "Drag0nFly",
          players: ["Igrander", "ShikiGremory"],
        },
      ],
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
