<template>
    <article class="content">
        <p>
            <span id="editions">{{ editions }}</span>
            {{ $t("association.numbers.tournament") }}<br />
            {{ $t("association.numbers.since-2017") }}
        </p>
        <p>
            {{ $t("association.numbers.up-to") }}
            <span id="players">{{ players }}</span>
            {{ $t("association.numbers.players") }}
        </p>
        <p>
            {{ $t("association.numbers.more-than") }}
            <span id="cash-prize">{{ cashprize }}</span>
            {{ $t("association.numbers.cashprize") }}
        </p>
    </article>
</template>

<script>
import { CountUp } from "countup.js";

export default {
    name: "numbersAssociationComponent",
    data() {
        return {
            editions: 11,
            players: 450,
            cashprize: 6500,
            options: {
                duration: 3,
                enableScrollSpy: true,
                scrollSpyOnce: true,
            },
        };
    },
    mounted() {
        const counter_editions = new CountUp(
            "editions",
            this.editions,
            this.options
        );
        const counter_players = new CountUp(
            "players",
            this.players,
            this.options
        );
        const counter_cashprize = new CountUp("cash-prize", this.cashprize, {
            ...this.options,
            separator: " ",
            suffix: " €",
        });
        counter_editions.handleScroll();
        counter_players.handleScroll();
        counter_cashprize.handleScroll();
    },
};
</script>

<style lang="scss" scoped>
article {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;

    p {
        background-color: var(--bg-color-alt);
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;
        display: flex;
        flex-direction: column;
        font-size: 1.1em;
        justify-content: center;
        padding: 1.5rem;
        text-align: center;

        span {
            color: var(--special-color);
            font-size: 2em;
            font-weight: bold;
        }
    }

    @media (min-width: 451px) and (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);

        p:first-of-type {
            grid-column: span 2;
        }
    }

    @media (max-width: 450px) {
        grid-template-columns: 1fr;
    }
}
</style>
