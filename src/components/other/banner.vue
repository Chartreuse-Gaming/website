<template>
  <article id="banner">
    <h1>{{ title }}</h1>
    <img :src="require(`@/${src}`)" :alt="title + '.'" />
  </article>
</template>

<script>
export default {
  name: "bannerComponent",
  props: ["title", "src"],
};
</script>

<style scoped lang="scss">
@import "node_modules/compass-mixins/lib/compass/css3";

article {
  height: 450px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;

  &::after {
    @include box-shadow(
      inset 0 150px 180px 0 var(--bg-color),
      inset 0 -150px 80px -30px var(--bg-color)
    );
    height: calc(100% + 2px);
    content: "";
    position: absolute;
    top: -1px;
    right: 0;
    bottom: 0;
    left: 0;
  }

  h1 {
    z-index: 1;
    width: 100%;
    position: absolute;
    top: 44%;
    transform: translateY(-50%);
    font-size: 3.6em;
    padding: 1rem;
    text-align: center;
    text-shadow: 0 0 16px rgb(0, 0, 0);

    @media only screen and (max-width: 650px) {
      font-size: 2.6em;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
</style>
