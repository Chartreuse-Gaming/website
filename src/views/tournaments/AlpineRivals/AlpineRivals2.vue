<template>
    <main>
        <Banner
            id="rl_banner"
            title=""
            src="assets/img/carousel/valo_banner.webp"
        />

        <article id="presentation" class="content">
            <h2>{{ $t("presentation") }}</h2>
            <p>
                {{ $t("tournaments.Alpine_Rivals.2.presentation") }}
            </p>
        </article>

        <Cashprize :data="cashprize" :title="true" />
    </main>
</template>

<script>
import Banner from "@/components/other/banner";
import Cashprize from "@/components/other/cashprize";

export default {
    name: "AlpineRivals2View",
    title() {
        return this.$t("tournaments.Alpine_Rivals.2.self");
    },
    components: {
        Banner,
        Cashprize,
    },
    data() {
        return {
            cashprize: [
                {
                    name: "Valorant",
                    image: "Valorant.webp",
                    cash: 300,
                    regulation:
                        "https://drive.google.com/file/d/1vd_VQM_sb7kJT045OKSZOGI3LNNCppM9/view",
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
