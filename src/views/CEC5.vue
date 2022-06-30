<template>
  <main>
    <Banner
      title="Chartreuse Esport Contest 5"
      img_src="assets/img/carousel/CEC_5.webp"
      img_alt="Chartreuse Esport Contest 5"
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

      <Table img="Rocket_League" alt="Rocket League" :data="data.rl" />

      <Table
        img="CSGO"
        alt="Counter Strike: Global Offensive"
        :data="data.cs"
      />

      <Table img="League_of_Legends" alt="League of Legends" :data="data.lol" />
    </div>
  </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Table from "@/components/other/table";

export default {
  name: "CEC5View",
  title: "Chartreuse Esport Contest 5",
  components: {
    Banner,
    Table,
  },
  data() {
    return {
      data: {
        rl: "",
        cs: "",
        lol: "",
      },
    };
  },
};
</script>

<style scoped lang="scss">
main > div {
  position: relative;
  top: -140px;
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
