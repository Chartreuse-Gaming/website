<template>
    <main>
        <Banner
            :title="$t('tournaments.CEC.5.self')"
            src="assets/img/carousel/CEC/CEC5.webp"
        />

        <div class="banner-content">
            <article id="sponsors" class="content">
                <img src="@/assets/img/sponsors/FullLife.webp" alt="FullLife" />
                <img
                    src="@/assets/img/sponsors/Drone_Process.webp"
                    alt="Drone Process"
                />
                <img src="@/assets/img/sponsors/Noctua.webp" alt="Noctua" />
                <img
                    src="@/assets/img/sponsors/Coeur_de_Chartreuse.webp"
                    alt="Coeur de Chartreuse"
                />
                <img
                    src="@/assets/img/sponsors/Saint_Laurent_du_Pont.webp"
                    alt="Saint Laurent du Pont"
                />
            </article>

            <article id="presentation" class="content">
                <h2>{{ $t("presentation") }}</h2>
                <p>{{ $t("tournaments.CEC.5.presentation") }}</p>
            </article>

            <article id="ranking" class="content">
                <Table
                    img="Rocket_League"
                    alt="Rocket League"
                    :data="ranking.rl"
                />

                <Table
                    img="CSGO"
                    alt="Counter Strike: Global Offensive"
                    :data="ranking.cs"
                />
            </article>

            <Table
                img="League_of_Legends"
                alt="League of Legends"
                :data="ranking.lol"
            />

            <!--<Gallery :images="images" />-->
        </div>
    </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Table from "@/components/other/table";
import rl from "@/assets/json/CEC/CEC5/rocket_league.json";
import cs from "@/assets/json/CEC/CEC5/counter_strike.json";
import lol from "@/assets/json/CEC/CEC5/league_of_legends.json";

export default {
    name: "CEC5View",
    title() {
        return this.$t("tournaments.CEC.5.self");
    },
    components: {
        Banner,
        Table,
    },
    data() {
        return {
            ranking: {
                rl: rl,
                cs: cs,
                lol: lol,
            },
            images: [""],
        };
    },
};
</script>
