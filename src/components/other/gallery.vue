<template>
  <article class="content">
    <h2>{{ $t("gallery") }}</h2>

    <transition-group name="thumbnailfade" tag="div">
      <img
        v-for="thumb in images"
        :key="thumb.id"
        @click="showLightbox(thumb.name)"
        :src="directory + thumb.name"
        :alt="thumb.alt"
        :title="thumb.alt"
      />
    </transition-group>

    <lightbox
      id="mylightbox"
      ref="lightbox"
      :images="images"
      :directory="directory"
      :timeout-duration="1200"
      :close-on-backdrop-click="true"
      @on-lightbox-close="onLightboxClose"
    />
  </article>
</template>

<script>
import Lightbox from "vue-my-photos";

export default {
  name: "CEC5View",
  props: ["directory", "images"],
  components: {
    Lightbox,
  },
  data() {
    return {
      body: document.getElementsByTagName("body")[0],
    };
  },
  methods: {
    showLightbox: function (imageName) {
      this.body.style.overflow = "hidden";
      this.$refs.lightbox.show(imageName);
    },
    onLightboxClose() {
      this.body.style.overflow = "overlay";
    },
  },
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
}

img {
  flex: 1 1 20%;
  width: 270px;
  height: 200px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  object-fit: cover;
  object-position: center center;
}

.thumbnailfade-leave-active,
.thumbnailfade-enter-active {
  transition: all 0.4s ease;
}

.thumbnailfade-enter-active {
  transition-delay: 0.4s;
}

.thumbnailfade-enter,
.thumbnailfade-leave-to {
  opacity: 0;
}
</style>
