<template>
  <section class="content">
    <h2>{{ $t("association.members.head-office") }}</h2>
    <div>
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
    </div>
  </section>
</template>

<script>
export default {
  name: "membersAssociationComponent",
};
</script>

<style scoped lang="scss">
section {
  margin-bottom: 10px;

  h2 {
    margin-bottom: 30px;
  }

  & > div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    gap: 36px 16px;

    & > div {
      flex: 1 0 calc(100% / 6);
      min-width: 200px;

      p:first-of-type {
        font-weight: bold;
        font-size: 1.25em;
        color: var(--green-touch);
        margin-bottom: 6px;
      }

      span {
        font-weight: bold;

        &:before {
          content: "« ";
          font-size: 1.2em;
        }

        &:after {
          content: " »";
          font-size: 1.2em;
        }
      }

      @media only screen and (max-width: 400px) {
        min-width: unset;
        flex-basis: 100%;
      }
    }
  }
}
</style>
