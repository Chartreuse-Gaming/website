<template>
    <main>
        <Banner
            :title="$t('tournaments.CEC.2.self')"
            src="assets/img/carousel/CEC/CEC2.webp"
        />

        <div class="banner-content">
            <article id="sponsors" class="content">
                <img
                    src="@/assets/img/sponsors/Coeur_de_Chartreuse.webp"
                    alt="Coeur de Chartreuse"
                />
                <img
                    src="@/assets/img/sponsors/LDLC.webp"
                    alt="LDLC Chambéry"
                />
                <img
                    src="@/assets/img/sponsors/gc_informatique.webp"
                    alt="GC Informatique"
                />
                <img
                    src="@/assets/img/sponsors/Inov_Concept.webp"
                    alt="Inov Concept"
                />
            </article>

            <article id="presentation" class="content">
                <h2>{{ $t("presentation") }}</h2>
                <p>{{ $t("tournaments.CEC.2.presentation") }}</p>
            </article>

            <Table
                img="League_of_Legends"
                alt="League of Legends"
                :data="ranking"
            />

            <!--<Gallery :images="images" />-->
        </div>
    </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Table from "@/components/other/table";
import lol from "@/assets/json/CEC/CEC2/league_of_legends.json";

export default {
    name: "CEC2View",
    title() {
        return this.$t("tournaments.CEC.2.self");
    },
    components: {
        Banner,
        Table,
    },
    data() {
        return {
            ranking: lol,
            images: [""],
        };
    },
};
</script>
