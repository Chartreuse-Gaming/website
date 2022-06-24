<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;700&display=swap");

:root {
  --bg-color: #262626;
  --text-color: #ffffff;
  --subtext-color: #e1e1e1;
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
}

.content {
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  padding: 18px;
}

.btn {
  margin: 0 auto;
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
}

.hidden {
  display: none !important;
}
</style>
