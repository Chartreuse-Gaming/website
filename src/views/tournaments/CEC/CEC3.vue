<template>
    <main>
        <Banner
            :title="$t('tournaments.CEC.3.self')"
            src="assets/img/carousel/CEC/CEC3.webp"
        />

        <div class="banner-content">
            <article id="sponsors" class="content">
                <img
                    src="@/assets/img/sponsors/Boulangerie_Patisserie_Modelon.webp"
                    alt="Boulangerie Pâtisserie Modelon"
                />
                <img
                    src="@/assets/img/sponsors/Drone_Process.webp"
                    alt="Drone Process"
                />
                <img
                    src="@/assets/img/sponsors/Ecoprestige.webp"
                    alt="Ecoprestige"
                />
                <img
                    src="@/assets/img/sponsors/Saint_Laurent_du_Pont.webp"
                    alt="Saint Laurent du Pont"
                />
                <img
                    src="@/assets/img/sponsors/Coeur_de_Chartreuse.webp"
                    alt="Coeur de Chartreuse"
                />
            </article>

            <article id="presentation" class="content">
                <h2>{{ $t("presentation") }}</h2>
                <p>{{ $t("tournaments.CEC.3.presentation") }}</p>
            </article>

            <article id="ranking" class="content">
                <Table
                    img="League_of_Legends"
                    alt="League of Legends"
                    :data="ranking.lol"
                />

                <Table
                    img="Rocket_League"
                    alt="Rocket League"
                    :data="ranking.rl"
                />
            </article>

            <!--<Gallery :images="images" />-->
        </div>
    </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Table from "@/components/other/table";
import lol from "@/assets/json/CEC/CEC3/league_of_legends.json";
import rl from "@/assets/json/CEC/CEC3/rocket_league.json";

export default {
    name: "CEC3View",
    title() {
        return this.$t("tournaments.CEC.3.self");
    },
    components: {
        Banner,
        Table,
    },
    data() {
        return {
            ranking: {
                lol: lol,
                rl: rl,
            },
            images: [""],
        };
    },
};
</script>

<style scoped lang="scss">
#ranking {
    margin-bottom: unset;
}
</style>
