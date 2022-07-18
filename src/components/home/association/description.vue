<template>
  <section id="description">
    <img
      src="@/assets/img/association/Tshirt.webp"
      :alt="$t('association.t-shirt') + '.'"
    />
    <i></i>
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

  & > img {
    filter: opacity(0.25);
    z-index: -2;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
  }

  & > i {
    @include box-shadow(
      inset 0 100px 50px -30px var(--bg-color),
      inset 0 -100px 50px -30px var(--bg-color)
    );
    z-index: -1;
    position: absolute;
    top: -1px;
    width: 100%;
    height: calc(100% + 2px);
  }

  h2 {
    position: absolute;
  }

  article section {
    display: flex;
    align-items: center;
    gap: 40px;

    p {
      margin-top: 12px;
      font-size: 1.1em;
      text-align: justify;
      color: var(--subtext-color);

      &:first-child {
        margin-top: 50px;
      }
    }

    img {
      width: 44%;
      aspect-ratio: 16/9;
      border-radius: 8px;
      box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);

      @media only screen and (max-width: 1100px) {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  #description article {
    h2 {
      position: relative !important;
    }

    section p {
      margin-top: 12px !important;
    }
  }
}
</style>
