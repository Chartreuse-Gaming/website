<template>
  <Header />

  <router-view />

  <Footer />
</template>

<style lang="scss">
// Color
$bg-color: #262626;
$text-color: #ffffff;
$subtext-color: #e1e1e1;
$green-touch: #23d940;

// Font
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Roboto&display=swap");
$title-font: "Montserrat", "Georgia", "Arial", sans-serif;
$text-font: "Roboto", "Helvetica", "Arial", sans-serif;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: $text-color;
  font-family: $text-font;
}

body {
  background-color: $bg-color;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}
</style>

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
