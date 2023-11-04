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
                    <p>{{ $t("association.presentation.5") }}</p>
                </div>
                <img
                    :alt="$t('association.members.self') + '.'"
                    loading="lazy"
                    src="@/assets/img/association/Members.webp"
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

<style lang="scss" scoped>
@import "../../../../node_modules/compass-mixins/lib/compass/css3";

#description {
    position: relative;

    &::before,
    &::after {
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        z-index: -1;
    }

    &::before {
        background-image: url("@/assets/img/association/Tshirt.webp");
        background-position: center bottom;
        background-size: cover;
        opacity: 0.2;
        top: 0;
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
        align-items: center;
        display: flex;
        gap: 3rem;
        margin-bottom: 8px;

        p {
            color: var(--subtext-color);
            font-size: 1.1em;
            margin-top: 12px;
            text-align: justify;

            &:first-of-type {
                margin-top: 0;
            }
        }

        img {
            border-radius: 8px;
            box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
            width: 42%;

            @media only screen and (max-width: 1050px) {
                display: none;
            }
        }
    }
}
</style>
