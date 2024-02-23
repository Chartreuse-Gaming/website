<template>
    <main>
        <h1>Alpes Esport</h1>
        <Banner />

        <Tournaments :data="tournaments" />

        <Association
            id="association"
            v-observe-visibility="{
                callback: visibilityAssociation,
                intersection: {
                    rootMargin: '-150px',
                },
            }"
        />

        <Contact
            id="contact"
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
import Banner from "@/components/home/banner";
import Tournaments from "@/components/home/tournaments";
import Association from "@/components/home/association";
import Contact from "@/components/home/contact";

export default {
    name: "HomeView",
    title() {
        return this.$t("home");
    },
    components: {
        Banner,
        Tournaments,
        Association,
        Contact,
    },
    data() {
        return {
            visibility: {
                association: false,
                contact: false,
            },
            tournaments: {
                title: this.$t("tournaments.previous"),
                links: [
                    {
                        name: "CEC5",
                        title: this.$t("tournaments.CEC.5.self"),
                        img: "assets/img/tournaments/CEC/CEC5.webp",
                    },
                    {
                        name: "CEC4",
                        title: this.$t("tournaments.CEC.4.self"),
                        img: "assets/img/tournaments/CEC/CEC4.webp",
                    },
                    {
                        name: "CEC3",
                        title: this.$t("tournaments.CEC.3.self"),
                        img: "assets/img/tournaments/CEC/CEC3.webp",
                    },
                    {
                        name: "CGW_2019",
                        title: this.$t("tournaments.CGW_2019.self"),
                        img: "assets/img/tournaments/CGW_2019.webp",
                    },
                    {
                        name: "CEC2",
                        title: this.$t("tournaments.CEC.2.self"),
                        img: "assets/img/tournaments/CEC/CEC2.webp",
                    },
                    {
                        name: "CEC1",
                        title: this.$t("tournaments.CEC.1.self"),
                        img: "assets/img/tournaments/CEC/CEC1.webp",
                    },
                ],
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

<style scoped lang="scss">
main > article:nth-child(3) {
    padding-top: 20px;
}

h1 {
    display: none;
}
</style>
