<template>
    <main>
        <Banner
            :title="$t('tournaments.CEC.6.self')"
            src="assets/img/carousel/CEC/CEC6.webp"
        />

        <article id="presentation" class="content">
            <h2>{{ $t("presentation") }}</h2>
            <p>{{ $t("tournaments.CEC.6.presentation") }}</p>
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
                cs: cs,
                lol: lol,
            },
            cashprize: [
                {
                    name: "League of Legends",
                    image: "League_of_Legends.webp",
                    cash: 675,
                },
                {
                    name: "Valorant",
                    image: "Valorant.webp",
                    cash: 675,
                },
                {
                    name: "Rocket League",
                    image: "Rocket_League.webp",
                    cash: 405,
                },
            ],
            images: [""],
        };
    },
};
</script>
