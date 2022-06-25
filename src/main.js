import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import VueSplide from "@splidejs/vue-splide";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faDiscord,
  faTwitch,
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faSortDown, faBars } from "@fortawesome/free-solid-svg-icons";

library.add(
  faSortDown,
  faBars,
  faDiscord,
  faTwitch,
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebookF,
  faLinkedin
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueSplide)
  .use(i18n)
  .use(router)
  .mount("#app");
