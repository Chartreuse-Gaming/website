<template>
  <section
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
      <span id="cashprize">6000</span> {{ $t("association.numbers.cashprize") }}
    </p>
  </section>
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
section {
  padding-top: 10px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;

  p {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    font-size: 1.1em;

    span {
      font-size: 2em;
      font-weight: bold;
      color: var(--green-touch);
    }
  }
}
</style>
