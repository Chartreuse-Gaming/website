<template>
  <article class="content">
    <h2>{{ data.title }}</h2>
    <section>
      <router-link
        v-for="link in data.links"
        v-bind:key="link.name"
        :to="{ name: link.name }"
      >
        <div>
          <img
            :src="require('@/' + link.img)"
            :alt="link.title + '.'"
            loading="lazy"
          />
          <i></i>
        </div>
        <p>{{ link.title }}</p>
      </router-link>
    </section>
    <!--<router-link to="/" class="btn">{{ $t("load-more") }}</router-link>-->
  </article>
</template>

<script>
export default {
  name: "oldTournamentComponent",
  props: ["data"],
};
</script>

<style scoped lang="scss">
article section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2.5rem;

  a {
    flex: 0 1 calc(100% / 3 - 1.7rem);
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.22em;

    div {
      position: relative;
      margin-bottom: 1em;

      * {
        display: block;
        border-radius: 8px;
      }

      img {
        width: 100%;
        height: 100%;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
      }

      i {
        z-index: -1;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        transform: rotate(0);
        transition: transform 400ms;
        position: absolute;
        top: 1px;
        left: 1px;
        border: 5px solid var(--special-color);
        background-color: var(--bg-color);
      }

      &:hover i {
        transform: rotate(-5deg);
      }
    }

    @media (max-width: 880px) {
      flex-basis: calc(100% / 2 - 1.25rem);
    }

    @media (max-width: 580px) {
      flex-basis: 100%;
    }
  }
}

.btn {
  margin-top: 3em;
}
</style>
