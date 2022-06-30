<template>
  <main>
    <h1 class="hidden">Chartreuse Gaming</h1>
    <Carousel />

    <OldTournament />

    <Association
      v-observe-visibility="{
        callback: visibilityAssociation,
        intersection: {
          rootMargin: '-300px',
        },
      }"
    />

    <Contact
      v-observe-visibility="{
        callback: visibilityContact,
        intersection: {
          rootMargin: '-150px',
        },
      }"
    />
  </main>
</template>

<script>
import Carousel from "@/components/home/carousel";
import OldTournament from "@/components/home/oldTournament";
import Association from "@/components/home/association";
import Contact from "@/components/home/contact";

export default {
  name: "HomeView",
  components: {
    Carousel,
    OldTournament,
    Association,
    Contact,
  },
  data() {
    return {
      visibility: {
        association: false,
        contact: false,
      },
    };
  },
  methods: {
    visibilityAssociation(isVisible) {
      this.visibility.association = isVisible;
      this.$emit("navbar", { elements: this.visibility });
    },
    visibilityContact(isVisible) {
      this.visibility.contact = isVisible;
      this.$emit("navbar", { elements: this.visibility });
    },
  },
};
</script>
