<template>
    <main>
        <Banner
            id="rl_banner"
            title=""
            src="assets/img/carousel/rl_banner.webp"
        />

        <article id="presentation" class="content">
            <h2>{{ $t("presentation") }}</h2>
            <p>
                Plongez au coeur de l'action avec le premier chapitre d'Alpes
                Esport. Au programme, une atmosphère électrique avec des
                voitures sur vitaminées. Ne manquez pas notre premier tournoi en
                ligne sur Rocket League, le samedi 29 juin 2024. Tournoi en
                format Swiss round, en 3vs3 et un cashprize de 200€ !
            </p>
        </article>

        <Cashprize :data="cashprize" :title="true" />
    </main>
</template>

<script>
import Banner from "@/components/other/banner";
import rl from "@/assets/json/CEC/CEC5/rocket_league.json";
import Cashprize from "@/components/other/cashprize";

export default {
    name: "CEC6View",
    title() {
        return this.$t("tournaments.CEC.6.self");
    },
    components: {
        Banner,
        Cashprize,
    },
    data() {
        return {
            ranking: {
                rl: rl,
            },
            cashprize: [
                {
                    name: "Rocket League",
                    image: "Rocket_League.webp",
                    cash: 200,
                    regulation:
                        "https://docs.google.com/document/d/1T-a3IJQHkku3cZ4GjiQPRTKs7T-52SLw",
                    registration: "https://challonge.com/fr/CEC6_RL",
                },
            ],
            images: [""],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "node_modules/compass-mixins/lib/compass/css3";

#rl_banner {
    height: 700px;

    &::after {
        @include box-shadow(
            inset 0 100px 150px 0 var(--bg-color),
            inset 0 -100px 50px -30px var(--bg-color)
        );
    }
}
</style>
