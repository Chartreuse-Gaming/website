<template>
  <main>
    <Banner
      title="Chartreuse Esport Contest 3"
      img_src="assets/img/carousel/CEC_3.webp"
      img_alt="Chartreuse Esport Contest 3"
    />

    <div>
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
          src="@/assets/img/sponsors/Drone_Process.webp"
          alt="Drone Process"
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

      <Table
        img="League_of_Legends"
        alt="League of Legends"
        :data="ranking.lol"
      />

      <Table img="Rocket_League" alt="Rocket League" :data="ranking.rl" />

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
      ranking: {
        lol: [
          {
            id: 1,
            name: "Retry",
            players: [
              "Djokz",
              "Gallic R4ge",
              "Olcadan",
              "Salut Moi C Ben",
              "Thraesh",
            ],
          },
          {
            id: 2,
            name: "Ekinox",
            players: ["Kisaro", "Lampadaire", "Sukyos", "Vrakst", "Xenot"],
          },
          {
            id: 3,
            name: "Volibear's Runners",
            players: [
              "demonbak",
              "Gyndared",
              "I How to Hook I",
              "KübeV2",
              "Rûvën",
            ],
          },
          {
            id: 4,
            name: "VGY Corp",
            players: [
              "Gaëtan Picon",
              "Hitch",
              "MARKSMAN ONLY",
              "Ratila",
              "Shirø Lee",
            ],
          },
          {
            id: 5,
            name: "Our team is Good",
            players: [
              "4 shØts 1 kill",
              "InspecteurCF",
              "Monster To Kill",
              "TheElax",
              "zorvald",
            ],
          },
          {
            id: 5,
            name: "Flight",
            players: [
              "Apaz0x",
              "Arcad0x",
              "FLT WhyNoz",
              "Glum",
              "Melioa",
              "Volr0d",
            ],
          },
          {
            id: 7,
            name: "Easy Cashprize",
            players: ["Averose", "dodu", "Kaw", "Myself Fake", "neaph"],
          },
          {
            id: 7,
            name: "Arcana Sanctum",
            players: [
              "Déconnecté",
              "OxydiB",
              "The Viølet Råven",
              "Toothless Fenrir",
              "TTarKKen",
              "Vivs",
            ],
          },
          {
            id: 9,
            name: "hade",
            players: [
              "Crawstorne",
              "ÐΣŁŦΔ",
              "hade",
              "Tissma",
              "Joueurdumilieu",
            ],
          },
          {
            id: 9,
            name: "BeGreedy",
            players: [
              "123Sσłειł",
              "EctaNeko",
              "SpookyYordle",
              "Yatori",
              "Youri",
            ],
          },
          {
            id: 9,
            name: "Wolfs Origins",
            players: [
              "Darkpattate",
              "Giralight",
              "Sekedh",
              "Slash812",
              "Yasanno",
            ],
          },
          {
            id: 9,
            name: "Wapteam",
            players: ["Drawgeek38", "Esteed", "ExxKí", "FrSami", "Sacus"],
          },
          {
            id: 13,
            name: "CaramelOverSalé",
            players: [
              "Abdul Esport",
              "Ashori",
              "Clutterfunk",
              "Magicaltrolly",
              "u7754422698",
              "HEOZ",
            ],
          },
          {
            id: 13,
            name: "Gnocchi",
            players: ["Akro", "Bill ivan", "Kazoo", "winstaff", "Zephyx"],
          },
          {
            id: 13,
            name: "Les Bûches",
            players: [
              "Estelebogosse",
              "Gnôle",
              "Gobzy73",
              "Loonzerra",
              "Shownt",
            ],
          },
          {
            id: 13,
            name: "iSNARE",
            players: [
              "Gaemred",
              "Kyoji",
              "O Father O Satan",
              "PharraeL",
              "Sitron",
            ],
          },
        ],
        rl: [
          {
            id: 1,
            name: "SPM",
            players: ["Reijin", "Voltage"],
          },
          {
            id: 2,
            name: "Astro Red",
            players: ["Linkluc", "Ogawa"],
          },
          {
            id: 3,
            name: "Les Videurs",
            players: ["Les Videurs", "FrotteMan"],
          },
          {
            id: 4,
            name: "ESP Esports",
            players: ["Rizdax", "Zodark"],
          },
          {
            id: 5,
            name: "VST",
            players: ["Sillent-FuRiious", "YoshiDels"],
          },
          {
            id: 5,
            name: "Volt",
            players: ["MasterS", "MCK fr"],
          },
          {
            id: 5,
            name: "Déso Max",
            players: ["Neko", "Olirus"],
          },
          {
            id: 5,
            name: "Oziris Esport",
            players: ["Aqua", "Qeziaa"],
          },
          {
            id: 9,
            name: "FuRy",
            players: ["AtomiX312", "xDreameur"],
          },
          {
            id: 9,
            name: "Easy Cashprize",
            players: ["Heidjou", "Myself Fake"],
          },
          {
            id: 11,
            name: "Ekinox",
            players: ["Kisaro", "Vrakst"],
          },
        ],
      },
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
