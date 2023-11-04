<template>
    <article class="content">
        <h2>{{ $t("games") }}</h2>
        <div>
            <section v-for="game in data" :key="game.name">
                <header>
                    <img
                        :src="
                            require('@/assets/img/games/banner/' + game.image)
                        "
                        :alt="game.name"
                        loading="lazy"
                    />
                </header>
                <div>
                    <img
                        :src="require('@/assets/img/games/logo/' + game.image)"
                        :alt="game.name + 'logo'"
                        loading="lazy"
                    />
                    <h3>{{ game.cash }} €</h3>
                    <a :href="game.regulation" class="btn">
                        {{ $t("regulation") }}
                    </a>
                    <a :href="game.registration" class="btn">
                        {{ $t("registration") }}
                    </a>
                </div>
            </section>
        </div>
    </article>
</template>

<script>
export default {
    name: "cashprizeComponent",
    props: ["data"],
};
</script>

<style scoped lang="scss">
@import "node_modules/compass-mixins/lib/compass/css3";

article {
    padding-bottom: 0 !important;

    > div {
        border-radius: 6px;
        display: flex;
        flex-flow: row wrap;
        gap: 2.4rem 0;

        > section {
            flex: 1 1 calc(100% / 3);

            &:first-child header img {
                border-radius: 6px 0 0 0;
            }

            &:last-child header img {
                border-radius: 0 6px 0 0;
            }

            > header {
                @include box-shadow(
                    inset 0px -116px 40px -50px var(--bg-color)
                );

                img {
                    z-index: -1;
                    object-fit: cover;
                    width: 100%;
                    height: 200px;
                    position: relative;
                }
            }

            > div {
                transform: translateY(-50px);
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                margin: 0 1rem;

                img {
                    object-fit: contain;
                    width: 300px;
                    height: 90px;

                    @media only screen and (max-width: 400px) {
                        width: 100%;
                    }
                }

                h3 {
                    margin: 2rem 0 2.4rem;
                    padding: 1rem 2rem 1.2rem;
                    border-radius: 6px;
                    font-size: 2em;
                    font-family: var(--title-font);
                    display: inline-flex;
                    align-items: baseline;
                    gap: 0.8rem;
                    box-shadow: rgba(0, 0, 0, 0.4) 0 4px 18px 0;
                    position: relative;
                    background-color: var(--bg-color);
                    color: var(--special-color);
                    inline-size: max-content;

                    &::before {
                        z-index: -2;
                        content: "";
                        border-radius: 6px;
                        background-color: var(--special-color);
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        transform: rotate(-6deg);
                    }

                    &::after {
                        z-index: -1;
                        content: "";
                        border-radius: 4px;
                        background-color: var(--bg-color);
                        position: absolute;
                        top: 4px;
                        left: 4px;
                        bottom: 4px;
                        right: 4px;
                        transform: rotate(-6deg);
                    }
                }

                > a:first-of-type {
                    margin-bottom: 0.8rem;
                    background-color: #656565;
                }
            }
        }
    }
}
</style>
