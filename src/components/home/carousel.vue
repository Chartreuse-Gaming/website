<template>
  <article id="carousel">
    <Splide
      :options="options"
      :aria-label="$t('tournaments.self')"
      @splide:autoplay:play="updateDOM"
      @splide:autoplay:pause="updateDOM"
      @splide:active="updateDOM"
    >
      <SplideSlide>
        <article>
          <section>
            <p>{{ $t("tournaments.CEC.6.date") }}</p>
            <p class="CEC">
              Chartreuse<br />
              Esport<br />
              Contest <span>6</span>
            </p>
            <router-link :to="{ name: 'CEC6' }" class="btn">
              {{ $t("read-more") }}
              <font-awesome-icon icon="fa-solid fa-right-long" />
            </router-link>
          </section>
          <img
            src="@/assets/img/carousel/CEC/CEC_logo.webp"
            :alt="$t('tournaments.CEC.self') + ' logo'"
          />
        </article>
        <img
          src="@/assets/img/carousel/CEC/CEC6.webp"
          :alt="$t('tournaments.CEC.6.self')"
        />
      </SplideSlide>
      <!--<SplideSlide>
        <article>
          <section>
            <p>{{ $t("tournaments.CEC.5.date") }}</p>
            <p class="CEC">
              Chartreuse<br />
              Esport<br />
              Contest <span>5</span>
            </p>
            <router-link :to="{ name: 'CEC5' }" class="btn">
              {{ $t("read-more") }}
              <font-awesome-icon icon="fa-solid fa-right-long" />
            </router-link>
          </section>
          <img
            src="@/assets/img/carousel/CEC/CEC_logo.webp"
            :alt="$t('tournaments.CEC.self') + ' logo'"
          />
        </article>
        <img
          src="@/assets/img/carousel/CEC/CEC5.webp"
          :alt="$t('tournaments.CEC.5.self')"
        />
      </SplideSlide>
      <SplideSlide>
        <article>
          <section>
            <p>{{ $t("tournaments.CEC.4.date") }}</p>
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
          </section>
          <img
            src="@/assets/img/carousel/CEC/CEC_logo.webp"
            :alt="$t('tournaments.CEC.self') + ' logo'"
          />
        </article>
        <img
          src="@/assets/img/carousel/CEC/CEC4.webp"
          :alt="$t('tournaments.CEC.4.self')"
        />
      </SplideSlide>
      <SplideSlide>
        <article>
          <section>
            <p>{{ $t("tournaments.CEC.3.date") }}</p>
            <p class="CEC">
              Chartreuse<br />
              Esport<br />
              Contest <span>3</span>
            </p>
            <router-link :to="{ name: 'CEC3' }" class="btn">
              {{ $t("read-more") }}
              <font-awesome-icon icon="fa-solid fa-right-long" />
            </router-link>
          </section>
          <img
            src="@/assets/img/carousel/CEC/CEC_logo.webp"
            :alt="$t('tournaments.CEC.self') + ' logo'"
          />
        </article>
        <img
          src="@/assets/img/carousel/CEC/CEC3.webp"
          :alt="$t('tournaments.CEC.3.self')"
        />
      </SplideSlide>
      <SplideSlide>
        <article>
          <section>
            <p>{{ $t("tournaments.CGW_2019.date") }}</p>
            <p>
              Chartreuse<br />
              Gaming<br />
              Winter 2019
            </p>
            <router-link :to="{ name: 'CGW_2019' }" class="btn">
              {{ $t("read-more") }}
              <font-awesome-icon icon="fa-solid fa-right-long" />
            </router-link>
          </section>
        </article>
        <img
          src="@/assets/img/carousel/CGW_2019.webp"
          :alt="$t('tournaments.CGW_2019.self')"
        />
      </SplideSlide>-->
    </Splide>
  </article>
</template>

<script>
import "@splidejs/vue-splide/css";

export default {
  name: "carouselComponent",
  data() {
    return {
      DOM: {},
      options: {
        drag: false,
        type: "loop",
        rewind: true,
        rewindByDrag: true,
        autoplay: false,
        keyboard: true,
        cover: true,
        arrows: false,
        pagination: false,
        heightRatio: 0.4,
        speed: 350,
        rewindSpeed: this.speed,
        easing: "cubic-bezier(0.25, 0, 0.25, 1)",
        interval: 7500,
      },
    };
  },
  methods: {
    updateDOM() {
      this.DOM = document.getElementById("carousel").innerHTML;
    },
  },
  beforeUnmount() {
    document.getElementById("carousel").innerHTML = this.DOM;
  },
};
</script>

<style scoped lang="scss">
@import "node_modules/compass-mixins/lib/compass/css3";

article {
  .splide__slide {
    min-height: 450px;
    max-height: 700px;

    &::after {
      @include box-shadow(
        inset 0 175px 180px 0 var(--bg-color),
        inset 0 -175px 90px -30px var(--bg-color)
      );
      height: calc(100% + 2px);
      content: "";
      position: absolute;
      top: -1px;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  article {
    position: relative;
    margin-inline: auto;
    width: min(100% - 2rem, 1350px);
    height: 100%;

    section {
      z-index: 2;
      position: absolute;
      bottom: 22%;
      left: 0;
      display: flex;
      flex-flow: column nowrap;
      gap: 4px;

      &::before {
        content: "";
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
      }

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
      height: 80%;
      position: absolute;
      right: -16px;
      bottom: 0;
      transform: rotate(12deg);
    }
  }
}
</style>
