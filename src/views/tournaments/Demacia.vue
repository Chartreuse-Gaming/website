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
            cashprize: [
                {
                    name: "League of Legends",
                    image: "League_of_Legends.webp",
                    cash: 675,
                    regulation:
                        "https://docs.google.com/document/d/1GKTMMvaYPcfDy1wIB-k-9XGlAZJDDmcS",
                    registration: "https://challonge.com/fr/CEC6_LOL",
                },
            ],
        };
    },
};
</script>
