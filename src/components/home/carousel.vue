<template>
  <article>
    <Splide :options="options" :aria-label="$t('tournaments.self')">
      <SplideSlide>
        <i></i>
        <article>
          <section>
            <p>{{ $t("CEC5.date") }}</p>
            <p class="CEC">
              Chartreuse<br />
              Esport<br />
              Contest <span>5</span>
            </p>
            <router-link :to="{ name: 'CEC5' }" class="btn">
              {{ $t("read-more") }}
              <font-awesome-icon icon="fa-solid fa-right-long" />
            </router-link>
            <i></i>
          </section>
          <img
            src="@/assets/img/carousel/CEC_logo.webp"
            :alt="$t('CEC5.self') + 'logo'"
          />
        </article>
        <img src="@/assets/img/carousel/CEC_5.webp" :alt="$t('CEC5.self')" />
      </SplideSlide>
      <SplideSlide>
        <i></i>
        <article>
          <section>
            <p>{{ $t("CEC4.date") }}</p>
            <p id="CEC4" class="CEC">
              Chartreuse<br />
              Esport<br />
              Contest <span>4</span>
              <span>Online</span>
            </p>
            <router-link :to="{ name: 'CEC4' }" class="btn">
              {{ $t("read-more") }}
              <font-awesome-icon icon="fa-solid fa-right-long" />
            </router-link>
            <i></i>
          </section>
          <img
            src="@/assets/img/carousel/CEC_logo.webp"
            :alt="$t('CEC4.self') + 'logo'"
          />
        </article>
        <img src="@/assets/img/carousel/CEC_4.webp" :alt="$t('CEC4.self')" />
      </SplideSlide>
      <SplideSlide>
        <i></i>
        <article>
          <section>
            <p>{{ $t("CEC3.date") }}</p>
            <p class="CEC">
              Chartreuse<br />
              Esport<br />
              Contest <span>3</span>
            </p>
            <router-link :to="{ name: 'CEC3' }" class="btn">
              {{ $t("read-more") }}
              <font-awesome-icon icon="fa-solid fa-right-long" />
            </router-link>
            <i></i>
          </section>
          <img
            src="@/assets/img/carousel/CEC_logo.webp"
            :alt="$t('CEC3.self') + 'logo'"
          />
        </article>
        <img src="@/assets/img/carousel/CEC_3.webp" :alt="$t('CEC5.self')" />
      </SplideSlide>
    </Splide>
  </article>
</template>

<script>
import "@splidejs/vue-splide/css";

export default {
  name: "carouselComponent",
  data() {
    return {
      options: {
        type: "loop",
        rewind: true,
        rewindByDrag: true,
        autoplay: true,
        keyboard: true,
        cover: true,
        arrows: false,
        heightRatio: 0.4,
        speed: 350,
        rewindSpeed: this.speed,
        easing: "cubic-bezier(0.25, 0, 0.25, 1)",
        interval: 7500,
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "node_modules/compass-mixins/lib/compass/css3";

article {
  &,
  .splide,
  .splide__slide {
    min-height: 450px;
    max-height: 700px;
  }

  .splide__slide > i {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: calc(100% + 1px);
    @include box-shadow(
      inset 0 175px 180px 0 var(--bg-color),
      inset 0 -175px 90px -30px var(--bg-color)
    );
  }

  article {
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    height: 100%;

    section {
      z-index: 2;
      position: absolute;
      bottom: 22%;
      left: 0;
      display: flex;
      flex-flow: column nowrap;
      gap: 4px;
      padding-left: 16px;

      & > p:first-of-type {
        color: var(--subtext-color);
        font-size: 1.4em;
        text-shadow: 0 0 8px rgb(0, 0, 0);
      }

      & > p:last-of-type {
        position: relative;
        font-size: 3.6em;
        text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
        text-transform: uppercase;
        font-family: var(--title-font);
        font-weight: bold;
      }

      a {
        width: max-content;
        margin: 20px 0 0;
        padding: 8px 30px;

        svg {
          margin-left: 10px;
        }
      }

      i {
        z-index: -1;
        width: calc(100% + 300px);
        height: calc(100% + 300px);
        top: -150px;
        left: -150px;
        position: absolute;
        background: rgb(38, 38, 38);
        background: radial-gradient(
          circle,
          rgba(38, 38, 38, 1) 0%,
          rgba(252, 70, 107, 0) 60%
        );

        @media only screen and (max-width: 600px) {
          opacity: 0.7;
        }
      }

      .CEC {
        text-align: left !important;

        span {
          position: absolute;
          font-size: 2.8em;
          line-height: 0;
          right: 10px;
          transform: rotate(8deg);
        }
      }

      #CEC4 {
        span:first-of-type {
          right: 0;
        }

        span:last-of-type {
          font-size: 0.6em;
          top: 0;
          right: -50px;

          &:before {
            z-index: -1;
            content: "";
            position: absolute;
            border-radius: 8px;
            background-color: var(--bg-color);
            border: 2px solid var(--green-touch);
            height: 46px;
            top: -25px;
            left: -11px;
            width: 160px;
            box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;

            @media only screen and (max-width: 1300px) {
              height: 40px;
              top: -22px;
              width: 136px;
            }
          }

          @media only screen and (max-width: 450px) {
            display: none;
          }
        }
      }

      @media only screen and (max-width: 1300px) {
        bottom: 16%;

        & > p:first-of-type {
          color: var(--subtext-color);
          font-size: 1.2em;
          text-shadow: 0 0 8px rgb(0, 0, 0);
        }

        & > p:last-of-type {
          position: relative;
          font-size: 3em;
          text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
          text-transform: uppercase;
          font-family: var(--title-font);
          font-weight: bold;
        }
      }

      @media only screen and (max-width: 450px) {
        width: 100%;
        height: calc(100% - 170px);
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 16px;

        & > p:first-of-type {
          color: var(--subtext-color);
          font-size: 1.1em;
          text-shadow: 0 0 8px rgb(0, 0, 0);
        }

        & > p:last-of-type {
          position: relative;
          font-size: 2.4em;
          text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
          text-transform: uppercase;
          font-family: var(--title-font);
          font-weight: bold;
        }
      }
    }

    img {
      z-index: 0;
      height: 80%;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: rotate(12deg);
    }
  }
}
</style>
