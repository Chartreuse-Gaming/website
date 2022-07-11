<template>
  <article>
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
            :alt="$t('association.members') + '.'"
          />
        </section>
      </article>
    </section>

    <section id="history" class="content">
      <img src="@/assets/svg/logo.svg" :alt="$t('association.logo') + '.'" />
      <article>
        <font-awesome-icon icon="fa-solid fa-caret-up" />
        <section>
          <article>
            <header>
              2021
              <i></i>
            </header>
            <section>
              <h3>{{ $t("CEC5.self") }}</h3>
              <p>{{ $t("CEC5.histogram") }}</p>
            </section>
          </article>
          <article>
            <header>
              2020
              <i></i>
            </header>
            <section>
              <h3>{{ $t("CEC4.self") }}</h3>
              <p>{{ $t("CEC4.histogram") }}</p>
            </section>
          </article>
          <article>
            <header>
              2019
              <i></i>
            </header>
            <section>
              <h3>{{ $t("CEC3.self") }}</h3>
              <p>{{ $t("CEC3.histogram") }}</p>
            </section>
          </article>
          <article>
            <header>
              2019
              <i></i>
            </header>
            <section>
              <h3>{{ $t("CGW.self") }}</h3>
              <p>{{ $t("CGW.histogram") }}</p>
            </section>
          </article>
          <article>
            <header>
              2018
              <i></i>
            </header>
            <section>
              <h3>{{ $t("CEC2.self") }}</h3>
              <p>{{ $t("CEC2.histogram") }}</p>
            </section>
          </article>
          <article>
            <header>
              2017
              <i></i>
            </header>
            <section>
              <h3>{{ $t("CEC1.self") }}</h3>
              <p>{{ $t("CEC1.histogram") }}</p>
            </section>
          </article>
        </section>
      </article>
    </section>
  </article>
</template>

<script>
export default {
  name: "associationComponent",
};
</script>

<style scoped lang="scss">
@import "node_modules/compass-mixins/lib/compass/css3";

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
      font-size: 1.2em;
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
        & {
          display: none;
        }
      }
    }
  }
}

#history {
  position: relative;
  overflow: hidden;

  & > img {
    width: 34%;
    min-width: 400px;
    z-index: 1;
    position: absolute;
    left: 3vw;
    bottom: -150px;
    opacity: 0.04;
    transform: rotate(-20deg);

    @media only screen and (min-width: 1200px) {
      & {
        bottom: -150px;
      }
    }
  }

  article {
    &:before {
      content: "";
      position: absolute;
      top: 40px;
      left: calc(50% - 1px);
      bottom: 0;
      width: 6px;
      background-color: #fff;
    }

    & > svg {
      font-size: 2.4em;
      position: absolute;
      top: 18px;
      left: calc(50% - 10px);
      transform: scaleY(1.4);
    }

    section article {
      width: calc(50% - 50px);
      float: left;
      padding: 26px 0;
      clear: both;
      text-align: right;

      &:not(:first-child) {
        margin-top: -60px;
      }

      header {
        font-size: 32px;
        margin-bottom: 12px;
        position: relative;
        display: flex;
        flex-flow: row-reverse nowrap;
        align-items: center;
        font-family: var(--title-font);
        font-weight: bold;
        color: var(--green-touch);
        gap: 14px;

        i {
          flex-grow: 1;
          border-top: 4px dotted #656565;

          &:before {
            z-index: 1;
            content: "";
            position: absolute;
            border-radius: 50%;
            background-color: var(--green-touch);
            width: 8px;
            height: 8px;
            right: -56px;
            top: calc(50% - 4px);
          }
        }

        &:before {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          border: 4px solid #ffffff;
          background-color: var(--bg-color);
          border-radius: 100%;
          top: 50%;
          transform: translateY(-50%);
          right: -62px;
          z-index: 1;
        }

        &.big {
          &:before {
            width: 24px;
            height: 24px;
            transform: translate(6px, -50%);
          }

          i:before {
            width: 20px;
            height: 20px;
            top: calc(50% - 10px);
            right: -62px;
          }
        }
      }

      section {
        h3 {
          text-transform: uppercase;
          margin-bottom: 10px;
          font-size: 1.5em;
          font-family: var(--title-font);
        }

        p {
          line-height: 1.4em;
          color: var(--subtext-color);
        }
      }

      &:nth-child(2n) {
        text-align: left;
        float: right;

        header {
          flex-flow: row nowrap;

          i:before {
            right: 0;
            left: -52px;
            top: calc(50% - 4px);
          }

          &:before {
            left: -58px;
          }

          &.big {
            &:before {
              transform: translate(-6px, -50%);
            }

            i:before {
              width: 20px;
              height: 20px;
              top: calc(50% - 10px);
              left: -58px;
            }
          }
        }
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

  #history {
    & > img {
      min-width: 300px;
      bottom: -120px;
    }

    article {
      &:before {
        left: 27px;
      }

      & > svg {
        left: 18px;
      }

      section article {
        width: calc(100% - 46px) !important;
        float: right !important;
        text-align: left !important;

        &:not(:first-child) {
          margin-top: -20px !important;
        }

        header {
          flex-flow: row nowrap !important;

          i:before {
            left: -38px !important;
          }

          &:before {
            left: -44px !important;
          }

          &.big {
            &:before {
              transform: translate(-6px, -50%);
            }

            i:before {
              left: -44px !important;
            }
          }
        }
      }
    }
  }
}
</style>
