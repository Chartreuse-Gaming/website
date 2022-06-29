<template>
  <main>
    <h1 class="hidden">Chartreuse Gaming</h1>
    <article id="carousel">
      <Splide :options="options" :aria-label="$t('tournaments.self')">
        <SplideSlide>
          <i></i>
          <article>
            <section>
              <p>22 - 23 Octobre 2021</p>
              <p class="CEC5">
                Chartreuse<br />
                Esport<br />
                Contest <span>5</span>
              </p>
              <router-link to="/" class="btn">
                En savoir plus
                <font-awesome-icon icon="fa-solid fa-right-long" />
              </router-link>
              <i></i>
            </section>
            <img
              src="@/assets/img/carousel/CEC_5_logo.png"
              alt="Logo Chartreuse Esport Contest 5"
            />
          </article>
          <img
            src="@/assets/img/carousel/CEC_5.jpg"
            alt="Chartreuse Esport Contest 5"
          />
        </SplideSlide>
      </Splide>
    </article>

    <article id="old-tournaments" class="content">
      <h2>{{ $t("tournaments.previous") }}</h2>
      <section>
        <router-link to="/">
          <div>
            <img
              src="@/assets/img/tournaments/CEC_5.jpg"
              alt="Chartreuse Esport Contest 5"
            />
            <span>
              <i></i>
              <i></i>
            </span>
          </div>
          <p>Chartreuse Esport Contest 5</p>
        </router-link>
        <router-link to="/">
          <div>
            <img
              src="@/assets/img/tournaments/CGW_Crous.jpg"
              alt="Campus Games Week : Crous Edition"
            />
            <span>
              <i></i>
              <i></i>
            </span>
          </div>
          <p>Campus Games Week : Crous Edition</p>
        </router-link>
        <router-link to="/">
          <div>
            <img
              src="@/assets/img/tournaments/CGW_Grenoble.jpg"
              alt="Campus Games Week : Grenoble Edition"
            />
            <span>
              <i></i>
              <i></i>
            </span>
          </div>
          <p>Campus Games Week : Grenoble Edition</p>
        </router-link>
        <router-link to="/">
          <div>
            <img
              src="@/assets/img/tournaments/CEC_4.jpg"
              alt="Chartreuse Esport Contest 4 Online"
            />
            <span>
              <i></i>
              <i></i>
            </span>
          </div>
          <p>Chartreuse Esport Contest 4 Online</p>
        </router-link>
        <router-link to="/">
          <div>
            <img
              src="@/assets/img/tournaments/SJV.jpg"
              alt="Salon du Jeu Vidéo"
            />
            <span>
              <i></i>
              <i></i>
            </span>
          </div>
          <p>Salon du Jeu Vidéo</p>
        </router-link>
        <router-link to="/">
          <div>
            <img
              src="@/assets/img/tournaments/CEC_3.jpg"
              alt="Chartreuse Esport Contest 3"
            />
            <span>
              <i></i>
              <i></i>
            </span>
          </div>
          <p>Chartreuse Esport Contest 3</p>
        </router-link>
      </section>
      <!--<router-link to="/" class="btn">{{ $t("load-more") }}</router-link>-->
    </article>

    <article
      id="association"
      v-observe-visibility="{
        callback: visibilityAssociation,
        intersection: {
          rootMargin: '-300px',
        },
      }"
    >
      <section id="description">
        <img
          src="@/assets/img/Tshirt.jpg"
          :alt="$t('association.t-shirt') + '.'"
        />
        <i></i>
        <article class="content">
          <h2>
            {{ $t("association.self", 2) }}
          </h2>
          <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img
              src="@/assets/img/Members.jpg"
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
                2022
                <i></i>
              </header>
              <section>
                <h3>Titre de section</h3>
                <p>
                  Neque sunt voluptatibus repellat pariatur ut enim. Eveniet
                  rerum suscipit eveniet amet dignissimos. Doloremque et
                  distinctio quod molestiae ut.
                </p>
              </section>
            </article>
            <article>
              <header>
                2021
                <i></i>
              </header>
              <section>
                <h3>Titre de section</h3>
                <p>
                  Quo nobis cumque dolor iure voluptatem voluptatem alias
                  soluta.
                </p>
              </section>
            </article>
            <article>
              <header class="big">
                2020
                <i></i>
              </header>
              <section>
                <h3>Titre de section</h3>
                <p>
                  Rerum sit libero possimus amet excepturi. Exercitationem enim
                  dolores sunt praesentium dolorum praesentium.
                </p>
              </section>
            </article>
            <article>
              <header>
                2019
                <i></i>
              </header>
              <section>
                <h3>Titre de section</h3>
                <p>
                  Voluptatibus veniam ea reprehenderit atque. Reiciendis non
                  laborum adipisci ipsa pariatur omnis. Sed ipsam repudiandae
                  velit. Omnis libero nostrum aperiam nemo dolor ea eos eius.
                  Esse a non itaque quidem.
                </p>
              </section>
            </article>
            <article>
              <header>
                2018
                <i></i>
              </header>
              <section>
                <h3>Titre de section</h3>
                <p>
                  VAdipisci totam omnis cum et suscipit excepturi et excepturi.
                  Inventore sequi sit ut aliquid. Modi aut dolores dignissimos.
                </p>
              </section>
            </article>
            <article>
              <header class="big">
                2017
                <i></i>
              </header>
              <section>
                <h3>Titre de section</h3>
                <p>
                  Impedit dolorem commodi explicabo fugit aut alias voluptatem.
                  Magnam earum rerum quae dicta quibusdam aliquam ut.
                </p>
              </section>
            </article>
            <article>
              <header>
                2016
                <i></i>
              </header>
              <section>
                <h3>Titre de section</h3>
                <p>Qui facere eos aut suscipit doloremque quos...</p>
              </section>
            </article>
          </section>
        </article>
      </section>
    </article>

    <article id="history" class="content">
      <img src="@/assets/svg/logo.svg" :alt="$t('association.logo') + '.'" />
      <section>
        <font-awesome-icon icon="fa-solid fa-caret-up" />
        <article>
          <section>
            <header>
              2022
              <i></i>
            </header>
            <div>
              <h3>Titre de section</h3>
              <p>
                Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum
                suscipit eveniet amet dignissimos. Doloremque et distinctio quod
                molestiae ut.
              </p>
            </div>
          </section>
          <section>
            <header>
              2021
              <i></i>
            </header>
            <div>
              <h3>Titre de section</h3>
              <p>
                Quo nobis cumque dolor iure voluptatem voluptatem alias soluta.
              </p>
            </div>
          </section>
          <section>
            <header class="big">
              2020
              <i></i>
            </header>
            <div>
              <h3>Titre de section</h3>
              <p>
                Rerum sit libero possimus amet excepturi. Exercitationem enim
                dolores sunt praesentium dolorum praesentium.
              </p>
            </div>
          </section>
          <section>
            <header>
              2019
              <i></i>
            </header>
            <div>
              <h3>Titre de section</h3>
              <p>
                Voluptatibus veniam ea reprehenderit atque. Reiciendis non
                laborum adipisci ipsa pariatur omnis. Sed ipsam repudiandae
                velit. Omnis libero nostrum aperiam nemo dolor ea eos eius. Esse
                a non itaque quidem.
              </p>
            </div>
          </section>
          <section>
            <header>
              2018
              <i></i>
            </header>
            <div>
              <h3>Titre de section</h3>
              <p>
                VAdipisci totam omnis cum et suscipit excepturi et excepturi.
                Inventore sequi sit ut aliquid. Modi aut dolores dignissimos.
              </p>
            </div>
          </section>
          <section>
            <header class="big">
              2017
              <i></i>
            </header>
            <div>
              <h3>Titre de section</h3>
              <p>
                Impedit dolorem commodi explicabo fugit aut alias voluptatem.
                Magnam earum rerum quae dicta quibusdam aliquam ut.
              </p>
            </div>
          </section>
          <section>
            <header>
              2016
              <i></i>
            </header>
            <div>
              <h3>Titre de section</h3>
              <p>Qui facere eos aut suscipit doloremque quos...</p>
            </div>
          </section>
        </article>
      </section>
    </article>

    <article id="contact" class="content">
      <h2>{{ $t("contact.us") }}</h2>
      <section>
        <div>
          <font-awesome-icon icon="fa-solid fa-location-dot" />
          <p>
            000 Lorem ipsum dolor,<br />
            38000 Grenoble
          </p>
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-phone" />
          <p>+331 23 45 67 89</p>
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <p>ChartreuseGGaming@gmail.com</p>
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-share-nodes" />
          <span>
            <a href="https://discord.gg/invite/ENY2nV6">
              <font-awesome-icon icon="fa-brands fa-discord" />
            </a>
            <a href="https://twitter.com/chartreusegame">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
            <a href="https://www.facebook.com/chartreusegaming/">
              <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </a>
            <a href="https://www.instagram.com/chartreusegaming/">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
          </span>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import "@splidejs/vue-splide/css";

export default {
  name: "HomeView",
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
        interval: 7200,
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "node_modules/compass-mixins/lib/compass/css3";

#carousel {
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
      }

      .CEC5 span {
        position: absolute;
        font-size: 2.8em;
        line-height: 0;
        right: 10px;
        transform: rotate(8deg);
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

#old-tournaments {
  padding-top: 16px;

  h2 {
    font-size: 1.6em;
    margin-bottom: 16px;
    font-family: var(--title-font);
    text-transform: uppercase;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 30px;
    margin-bottom: 16px;

    a {
      flex: 1 1 calc(100% / 3 - 20px);
      text-decoration: none;
      color: var(--text-color);
      font-size: 1.2em;
      padding: 16px;

      div {
        position: relative;
        width: 100%;
        margin-bottom: 24px;

        & * {
          aspect-ratio: 16/9;
          border-radius: 8px;
        }

        img {
          width: 100%;
          height: 100%;
          display: block;
          position: relative;
          z-index: 3;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }

        span i {
          width: calc(100% - 2px);
          height: calc(100% - 2px);
          transform: rotate(0);
          transition: transform 400ms;
          position: absolute;
          top: 1px;
          left: 1px;
          display: block;

          &:first-of-type {
            z-index: 2;
            margin: 5px;
            width: calc(100% - 12px);
            height: calc(100% - 12px);
            background-color: var(--bg-color);
            border-radius: 6px;
          }

          &:last-of-type {
            z-index: 1;
            background-color: var(--green-touch);
          }
        }
      }

      &:hover span i {
        transform: rotate(-5deg);
      }

      @media only screen and (max-width: 920px) {
        flex-basis: calc(100% / 2 - 20px);
      }

      @media only screen and (max-width: 540px) {
        flex-basis: 100%;
      }
    }
  }
}

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
    font-size: 1.6em;
    position: absolute;
    font-family: var(--title-font);
    text-transform: uppercase;
  }

  article section {
    display: flex;
    align-items: center;
    gap: 40px;

    p {
      margin-top: 50px;
      font-size: 1.2em;
      text-align: justify;
      color: var(--subtext-color);
    }

    img {
      width: 44%;
      aspect-ratio: 16/9;
      border-radius: 8px;
      box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);

      @media only screen and (max-width: 900px) {
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

#contact {
  padding: 20px;
  background-color: var(--bg-color);
  width: 100%;
  max-width: 1200px;
  border-radius: 8px 8px 0 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;

  h2 {
    font-size: 1.6em;
    margin-bottom: 12px;
    font-family: var(--title-font);
    text-transform: uppercase;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    div {
      flex: 1 0 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: stretch;
      gap: 16px;
      text-align: center;
      padding: 16px;

      & > * {
        height: 50px;
        display: flex;
        align-items: center;
      }

      & > svg {
        color: var(--bg-color);
        stroke: var(--green-touch);
        stroke-width: 26px;
        stroke-linejoin: round;
      }

      span a {
        padding: 10px;
        color: white;

        & > svg {
          transition: all 150ms;
          height: 24px;
          transform: scale(1);
        }

        &:hover {
          svg {
            transform: scale(1.1);
            color: var(--subtext-color);
          }
        }

        @media only screen and (max-width: 350px) {
          padding: 5vw;
        }
      }
    }
  }

  @media only screen and (max-width: 920px) {
    section {
      flex-wrap: wrap;

      div {
        flex: 1 0 50%;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  h2 {
    text-align: center;
  }

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

  #contact section div {
    flex: 1 0 100%;

    span a {
      padding: 20px;
    }
  }
}
</style>
