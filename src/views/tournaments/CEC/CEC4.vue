<template>
    <main>
        <Banner
            :title="$t('tournaments.CEC.4.self')"
            src="assets/img/carousel/CEC/CEC4.webp"
        />

        <div class="banner-content">
            <article id="sponsors" class="content">
                <img
                    src="@/assets/img/sponsors/Coeur_de_Chartreuse.webp"
                    alt="Coeur de Chartreuse"
                />
                <img
                    src="@/assets/img/sponsors/Saint_Laurent_du_Pont.webp"
                    alt="Saint Laurent du Pont"
                />
                <img
                    src="@/assets/img/sponsors/Rocket_Baguette.webp"
                    alt="Rocket Baguette"
                />
                <img
                    src="@/assets/img/sponsors/Inova_Construction.webp"
                    alt="Inova Construction"
                />
                <img
                    src="@/assets/img/sponsors/Inov_Concept.webp"
                    alt="Inov' Concept"
                />
            </article>

            <article id="presentation" class="content">
                <h2>{{ $t("presentation") }}</h2>
                <p>{{ $t("tournaments.CEC.4.presentation") }}</p>
            </article>

            <Table img="Rocket_League" alt="Rocket League" :data="ranking" />

            <!--<Gallery :images="images" />-->
        </div>
    </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Table from "@/components/other/table";
import rl from "@/assets/json/CEC/CEC4/rocket_league.json";

export default {
    name: "CEC4View",
    title() {
        return this.$t("tournaments.CEC.4.self");
    },
    components: {
        Banner,
        Table,
    },
    data() {
        return {
            ranking: rl,
            images: [""],
        };
    },
};
</script>
