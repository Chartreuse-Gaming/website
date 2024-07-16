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
                {{ $t("tournaments.Alpine_Rivals.presentation") }}
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
    name: "AlpineRivals1View",
    title() {
        return this.$t("tournaments.Alpine_Rivals.1.self");
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
                        "https://drive.google.com/file/d/1Jtf_PDCgH6g9adI4Q-iIH9CZhz5mD3iw/view",
                    registration:
                        "https://play.toornament.com/fr/tournaments/7852588153972383744",
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
