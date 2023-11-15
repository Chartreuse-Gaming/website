import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import VueSplide from "@splidejs/vue-splide";
import VueObserveVisibility from "vue-observe-visibility";
import titleMixin from "./titleMixin";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faDiscord,
    faFacebookF,
    faInstagram,
    faTwitch,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faBars,
    faCaretUp,
    faClipboardList,
    faEnvelope,
    faLocationDot,
    faPhone,
    faRightLong,
    faShareNodes,
    faSortDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faSortDown,
    faBars,
    faDiscord,
    faTwitch,
    faYoutube,
    faTwitter,
    faInstagram,
    faFacebookF,
    faRightLong,
    faCaretUp,
    faLocationDot,
    faPhone,
    faEnvelope,
    faShareNodes,
    faClipboardList
);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(VueSplide)
    .use(i18n)
    .use(router)
    .use(VueObserveVisibility)
    .mixin(titleMixin)
    .mount("#app");
