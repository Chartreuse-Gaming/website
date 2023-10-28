<template>
    <section id="description">
        <article class="content">
            <h2>
                {{ $t("association.self", 2) }}
            </h2>
            <section>
                <div>
                    <p>{{ $t("association.presentation.1") }}</p>
                    <p>{{ $t("association.presentation.2") }}</p>
                    <p>{{ $t("association.presentation.3") }}</p>
                    <p>{{ $t("association.presentation.4") }}</p>
                </div>
                <img
                    src="@/assets/img/association/Members.webp"
                    :alt="$t('association.members.self') + '.'"
                    loading="lazy"
                />
            </section>
        </article>
    </section>
</template>

<script>
export default {
    name: "descriptionAssociationComponent",
};
</script>

<style scoped lang="scss">
@import "../../../../node_modules/compass-mixins/lib/compass/css3";

#description {
    position: relative;

    &::before,
    &::after {
        content: "";
        z-index: -1;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
    }

    &::before {
        background-image: url("@/assets/img/association/Tshirt.webp");
        background-position: center bottom;
        background-size: cover;
        top: 0;
        opacity: 0.2;
    }

    &::after {
        @include box-shadow(
            inset 0 100px 50px -30px var(--bg-color),
            inset 0 -100px 50px -30px var(--bg-color)
        );
        height: calc(100% + 2px);
        top: -1px;
    }

    article section {
        display: flex;
        align-items: center;
        gap: 3rem;
        margin-bottom: 8px;

        p {
            margin-top: 12px;
            font-size: 1.1em;
            text-align: justify;
            color: var(--subtext-color);

            &:first-of-type {
                margin-top: 0;
            }
        }

        img {
            width: 42%;
            border-radius: 8px;
            box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);

            @media only screen and (max-width: 1050px) {
                display: none;
            }
        }
    }
}
</style>
