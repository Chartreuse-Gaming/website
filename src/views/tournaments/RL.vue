<template>
    <main>
        <Banner
            title="Tournoi Rocket League"
            src="assets/img/carousel/CEC/CEC6.webp"
        />

        <article id="presentation" class="content">
            <h2>{{ $t("presentation") }}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. No
                tation justo. Ullamco blandit quod.
            </p>
        </article>

        <Cashprize :data="cashprize" />
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
