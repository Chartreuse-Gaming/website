<template>
    <main>
        <Banner
            id="rl_banner"
            title=""
            src="assets/img/carousel/lol_banner.webp"
        />

        <article id="presentation" class="content">
            <h2>{{ $t("presentation") }}</h2>
            <p>
                {{ $t("tournaments.Alpine_Rivals.3.presentation") }}
            </p>
        </article>

        <Cashprize :data="cashprize" :title="true" />
    </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Cashprize from "@/components/other/cashprize";

export default {
    name: "AlpineRivals3View",
    title() {
        return this.$t("tournaments.Alpine_Rivals.3.self");
    },
    components: {
        Banner,
        Cashprize,
    },
    data() {
        return {
            cashprize: [
                {
                    name: "League Of Legends",
                    image: "League_of_Legends.webp",
                    cash: 300,
                    regulation:
                        "https://drive.google.com/file/d/1-trZDJ5B71FEh20Q0QNnw9dVhbl5VZ38/view",
                    registration:
                        "https://play.toornament.com/fr/tournaments/8261200481331421184/",
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
