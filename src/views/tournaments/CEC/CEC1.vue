<template>
    <main>
        <Banner
            :title="$t('tournaments.CEC.1.self')"
            src="assets/img/carousel/CEC/CEC1.webp"
        />

        <div>
            <article id="presentation" class="content">
                <h2>{{ $t("presentation") }}</h2>
                <p>{{ $t("tournaments.CEC.1.presentation") }}</p>
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
// import Gallery from "@/components/other/gallery";
import lol from "@/assets/json/CEC/CEC1/league_of_legends.json";

export default {
    name: "CEC1View",
    title() {
        return this.$t("tournaments.CEC.1.self");
    },
    components: {
        Banner,
        Table,
        // Gallery,
    },
    data() {
        return {
            ranking: lol,
            images: [
                "1MewbZ3Y9vNFOdcTajVr1tsk3Cu8q1Abi",
                "1m1f5JF9tOgDfVILvPbX_teJDXQvFORjV",
                "1ONz0PChbnAKT-OyEuimWqvXJlf3hXJAs",
                "1jHO4rWn05egJwXtjijS-iprcHBWDCLGY",
                "17iZDlzGhC_1HqTejskzhkI5UBMKDwhIT",
                "1feoclu9Bjgl6N2XqYwm6mQw51TXx8SG7",
                "181lq02CpsSyq-FTGIR45-3vifu96xNrI",
                "18V6U4FSIxFhNU1xcG4rwiAUH7ejX894A",
                "1sE6-F5Pap71S6MuXsH7fyMMeKq8V7Zw4",
                "1AREWZ8uJCIn4nYtlcZ1Nvs88yaqWkHH7",
                "1Cdi49a1Pdo_tz39RKAYHrShDhOheGvbv",
                "1KPDwK1iUC78ErBYiiMy40euysopP5i2J",
                "1QxQ2S3jaWRrtp6lJwS6B1z36gZjiHlIK",
                "1b7a4qP1JdDvYqBJEt0Z2pfS4SXjP_Yor",
                "1oQsP834qi-hRq1C2TAjUcT3gpb514U75",
                "1n4wzLd2IDRGR27u0FXoAjXcot5sCOtAo",
                "1lawBxeKgbCjrSOD5p7YuXblKh9yLdHEs",
                "1-O9fft5SLLD4noSEqRYMjHa6ckket1xE",
                "1OkrhedGfDiwixUUP_-oSFZ-t0PTNqe69",
                "12O7ZH6LCzfT-M8a0SzYF6U2DwMBGXIx1",
                "1q0DMH37wsDmUoiAf5KYch0hAfoyDaSnl",
                "1GLs42b2_OSncoh6VJc8A9g40GyGlWFRe",
                "1L_dn43LZfcSScj9f-UTGfbK01daXJzA_",
                "1YiUkk7XtSSrBoOXR0k-h2_5mHGq2Ooa2",
                "1C-nv72xTzZNkT8jXEgoTU-imH5sIFRCh",
                "1N9y2jx8cLxgqpcdyrM9IZd0poohqqsVt",
                "1N97RJ0I8RxpqHt1F7PMOHAdUZYF8dvS_",
                "1A2oUdcDG7i4u-6qTVMKxd1xmTHPA4-gc",
                "1YqpsGak-07Vbm8Fqy_dEfNJOV7YjTzEl",
                "1mGJk8j1DpumYtszQEGSzYBtZWRKBniSO",
                "1CsWeUBy1hMJ1ofNkp2Vo17WrrwsirpOr",
                "15QRlxLtnkNlF9L6ObjpEhBifCeHjcFXf",
                "16kYoHECntFqI4BA6xWloFUYBHMWGBI1w",
                "1jCPei0R_4ObNTBtYt2gKgTlRypIrnD-c",
                "1x2sL6YxXHUrE84uLhOQV2sGTLVVwLHHj",
                "1xfLu9_hxSu_so-TBXIdWDq02SKgzLWT3",
                "1BPeRePjrGlaNqgNssy3lm0p8uA1DXg50",
                "1UhvdRb_dRlQLV_M76EFgbxezeKciOT4K",
                "1uZzvyEtZG6wQvYBgzs52egZ3aQYYG2R4",
                "1kb3ORsjobLjN7oWi3wqjDDcWpg2YgNJt",
                "10djjoxVeyzfvJLG4TqgIcetu3GYk-rd0",
                "1tX59IK6xqknqZsQef-QDrLnttEOIJXqg",
                "1oKu62KG_eZCW6vM7sV8QWZw-zs8Cox0b",
                "1jJ7pXslUZsMnTrHhHW5_O7dXHXC-LTrK",
                "1AZJf_WTIWj2g8inca2I4K-ntZKSEZRsj",
                "1css2CkupH-KD2L_blWpw-O9-hKd4bI7D",
                "1xOEuuIp8H60tRxUDmzq6ceE8voO0xJ6w",
                "1V1Dvat9dKm1VSFJHo1oHYW6WLrMggIS6",
                "1ogOP0zXUDPQwcCK6ISN_a_21TNQyF7uh",
                "1706OD69qhsI5k42EKRGZnjQA-D6X1eqr",
                "1TRf-Ul3RwDya5SdDaKvdArlAtw63relA",
            ],
        };
    },
};
</script>

<style scoped lang="scss">
#presentation {
    padding-top: 1rem;
}
</style>
