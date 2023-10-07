<template>
  <article class="content">
    <p>
      <span id="editions">5</span>
      {{ $t("association.numbers.editions") }}<br />
      {{ $t("tournaments.CEC.self") }}
    </p>
    <p>
      {{ $t("association.numbers.more-than") }}
      <span id="players">350</span>
      {{ $t("association.numbers.players") }}
    </p>
    <p>
      {{ $t("association.numbers.more-than") }}
      <span id="cash-prize">6000</span>
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
      editions: {},
      players: {},
      cashprize: {},
      options: {
        duration: 3,
        enableScrollSpy: true,
        scrollSpyOnce: true,
      },
    };
  },
  mounted() {
    this.editions = new CountUp("editions", 5, this.options);
    this.players = new CountUp("players", 350, this.options);
    this.cashprize = new CountUp("cash-prize", 6000, {
      ...this.options,
      separator: " ",
      suffix: " €",
    });
    this.editions.handleScroll();
    this.players.handleScroll();
    this.cashprize.handleScroll();
  },
};
</script>

<style scoped lang="scss">
article {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  p {
    justify-content: center;
    padding: 1.5rem;
    background-color: var(--bg-color-alt);
    box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1.1em;

    span {
      font-size: 2em;
      font-weight: bold;
      color: var(--special-color);
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
