<template>
  <article
    class="content"
    v-observe-visibility="{
      callback: visible,
      once: true,
      intersection: {
        rootMargin: '-250px',
      },
    }"
  >
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
      <span id="cashprize">6000</span>
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
    };
  },
  mounted() {
    this.editions = new CountUp("editions", 5, { duration: 3 });
    this.players = new CountUp("players", 350, { duration: 3 });
    this.cashprize = new CountUp("cashprize", 6000, {
      duration: 3,
      separator: " ",
      suffix: " €",
    });
  },
  methods: {
    visible() {
      if (window.pageYOffset !== 0) {
        this.editions.start();
        this.players.start();
        this.cashprize.start();
      }
    },
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
      color: var(--green-touch);
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
