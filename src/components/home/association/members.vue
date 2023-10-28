<template>
    <article class="content">
        <h2>{{ $t("association.members.head-office") }}</h2>
        <section>
            <div>
                <p>{{ $t("association.members.president") }}</p>
                <p>Maxime <span>Myself Fake</span> MOIROUD</p>
            </div>
            <div>
                <p>{{ $t("association.members.vice-president") }}</p>
                <p>Louis <span>Canard.exe</span> GRILLOT</p>
            </div>
            <div>
                <p>{{ $t("association.members.treasurer") }}</p>
                <p>Tom <span>Juan Pipito</span> HUMEAU</p>
            </div>
            <div>
                <p>{{ $t("association.members.secretary") }}</p>
                <p>Vincent <span>Gozzy</span> TESSIER</p>
            </div>
            <div>
                <p>{{ $t("association.members.administrative-manager") }}</p>
                <p>Martial <span>Battlesheep</span> BLANCHARD</p>
            </div>
        </section>
    </article>
</template>

<script>
export default {
    name: "membersAssociationComponent",
};
</script>

<style scoped lang="scss">
section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;

    div {
        flex: 1 1 calc(100% / 3 - 1.334rem);
        text-align: center;

        p:first-of-type {
            font-weight: bold;
            font-size: 1.25em;
            color: var(--special-color);
            margin-bottom: 6px;
        }

        span {
            font-weight: bold;

            &:before {
                content: "“";
            }

            &:after {
                content: "”";
            }
        }

        @media (max-width: 900px) {
            flex-basis: calc(100% / 2 - 1rem);
        }

        @media (max-width: 560px) {
            flex-basis: 100%;
        }
    }
}
</style>
