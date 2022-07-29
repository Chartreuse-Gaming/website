<template>
  <Header :current_link="element" />

  <router-view v-slot="{ Component }" @navbar="elements">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <Footer />
</template>

<script>
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      element: "home",
      prevHeight: 0,
    };
  },
  methods: {
    elements(payload) {
      if (payload.elements.contact) {
        this.element = "contact";
      } else if (payload.elements.association) {
        this.element = "association";
      } else {
        this.element = "home";
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;700&display=swap");

:root {
  --bg-color: #262626;
  --bg-color-alt: #2c2c2c;
  --text-color: #ffffff;
  --subtext-color: #e6e6e6;
  --footer-text-color: #b9b9b9;
  --green-touch: #23d940;
  --green-touch-alt: #1db036;

  --title-font: "Montserrat", "Georgia", "Arial", sans-serif;
  --text-font: "Roboto", "Helvetica", "Arial", sans-serif;
}

::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 14px 14px white;
  border: solid 4px transparent;
  border-radius: 14px;
}

::-webkit-scrollbar-button {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-color);
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  color: var(--text-color);
  font-family: var(--text-font);
  overflow: overlay;

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--title-font);
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.6em;
    margin-bottom: 20px;
  }
}

.content {
  width: min(100% - 2rem, 1350px);
  margin-inline: auto;
  padding: 40px 0;
}

.btn {
  margin-inline: auto;
  padding: 8px 16px;
  width: 180px;
  display: block;
  font-weight: bold;
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  background-color: var(--green-touch-alt);
  box-shadow: rgba(0, 0, 0, 0.15) 0 8px 16px 0;
  border-radius: 8px;
  transition: transform 150ms;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 450px) {
    width: 100% !important;
    padding: 10px 12px !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.splide .splide__pagination {
  bottom: 40px !important;
  gap: 6px;

  .splide__pagination__page {
    background: var(--text-color) !important;
    opacity: 1;
    padding: 5px !important;
    margin: 0 4px;

    &.is-active {
      background: var(--green-touch) !important;
    }
  }
}

@media only screen and (max-width: 600px) {
  h2 {
    text-align: center;
  }
}
</style>
