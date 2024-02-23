<template>
    <main>
        <Banner
            :title="$t('tournaments.Demacia.self')"
            src="assets/img/carousel/CEC/CEC6.webp"
        />

        <article id="presentation" class="content">
            <h2>{{ $t("presentation") }}</h2>
            <p>{{ $t("tournaments.Demacia.presentation") }}</p>
        </article>

        <Cashprize :data="cashprize" />
    </main>
</template>

<script>
import Banner from "@/components/other/banner";
import rl from "@/assets/json/CEC/CEC5/rocket_league.json";
import cs from "@/assets/json/CEC/CEC5/counter_strike.json";
import lol from "@/assets/json/CEC/CEC5/league_of_legends.json";
import Cashprize from "@/components/other/cashprize";

export default {
    name: "DemaciaView",
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
                cs: cs,
                lol: lol,
            },
            cashprize: [
                {
                    name: "League of Legends",
                    image: "League_of_Legends.webp",
                    cash: 675,
                    regulation:
                        "https://docs.google.com/document/d/1GKTMMvaYPcfDy1wIB-k-9XGlAZJDDmcS",
                    registration: "https://challonge.com/fr/CEC6_LOL",
                },
                {
                    name: "Valorant",
                    image: "Valorant.webp",
                    cash: 675,
                    regulation:
                        "https://docs.google.com/document/d/1AIX7Drj1b6Y4aFXMzGPjQqqxvk9Gfa0w",
                    registration: "https://challonge.com/fr/CEC6_VALORANT",
                },
                {
                    name: "Rocket League",
                    image: "Rocket_League.webp",
                    cash: 405,
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
