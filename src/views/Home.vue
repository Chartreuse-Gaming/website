<template>
  <main>
    <h1 class="hidden">Chartreuse Gaming</h1>
    <article id="carousel">
      <Splide :options="options" :aria-label="$t('tournaments.self')">
        <SplideSlide>
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
          <i></i>
          <div>
            <img
              class="slide-logo"
              src="@/assets/img/carousel/CEC_5_logo.png"
              alt="Logo Chartreuse Esport Contest 5"
            />
          </div>
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
      <router-link to="/" class="btn">{{ $t("load-more") }}</router-link>
    </article>

    <article id="association">
      <img
        src="@/assets/img/Tshirt.jpg"
        :alt="$t('association.t-shirt') + '.'"
      />
      <i></i>
      <section class="content">
        <h2>{{ $t("association.self", 2) }}</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img
            src="@/assets/img/Members.jpg"
            :alt="$t('association.members') + '.'"
          />
        </div>
      </section>
    </article>

    <article id="history" class="content">
      <img src="@/assets/svg/logo.svg" :alt="$t('association.logo') + '.'" />
      <section>
        <div class="entries">
          <div class="entry">
            <div class="title">2011</div>
            <div class="body">
              <p>
                Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum
                suscipit eveniet amet dignissimos. Doloremque et distinctio quod
                molestiae ut.
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">2012</div>
            <div class="body">
              <p>
                Quo nobis cumque dolor iure voluptatem voluptatem alias soluta.
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title big">2013</div>
            <div class="body">
              <p>
                Rerum sit libero possimus amet excepturi. Exercitationem enim
                dolores sunt praesentium dolorum praesentium.
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">2014</div>
            <div class="body">
              <p>
                Voluptatibus veniam ea reprehenderit atque. Reiciendis non
                laborum adipisci ipsa pariatur omnis. Sed ipsam repudiandae
                velit. Omnis libero nostrum aperiam nemo dolor ea eos eius. Esse
                a non itaque quidem.
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">2015</div>
            <div class="body">
              <p>
                VAdipisci totam omnis cum et suscipit excepturi et excepturi.
                Inventore sequi sit ut aliquid. Modi aut dolores dignissimos.
              </p>
              <p>
                Delectus facere officia consequuntur molestias deserunt illo.
                Placeat laudantium beatae natus excepturi ab nihil voluptates.
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title big">2016</div>
            <div class="body">
              <p>
                Impedit dolorem commodi explicabo fugit aut alias voluptatem.
                Magnam earum rerum quae dicta quibusdam aliquam ut.
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">2017</div>
            <div class="body">
              <p>Qui facere eos aut suscipit doloremque quos...</p>
            </div>
          </div>
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
  position: relative;

  &,
  .splide,
  .splide__slide {
    min-height: 400px;
    max-height: 700px;
  }

  .slide-logo {
    z-index: 0;
    height: 80%;
    display: block !important;
    position: absolute;
    right: 6%;
    bottom: 0;
    transform: rotate(12deg);
  }

  .splide__slide > i {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: calc(100% + 1px);
    @include box-shadow(
      inset 0 175px 180px 0px rgb(38, 38, 38),
      inset 0 -175px 90px -30px rgb(38, 38, 38)
    );
  }

  section {
    z-index: 2;
    position: absolute;
    bottom: 20%;
    left: 10%;
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;

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
      flex-basis: calc(100% / 3 - 20px);
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
    }
  }
}

#association {
  position: relative;

  & > img {
    filter: opacity(0.25);
    z-index: -2;
    position: absolute;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: center bottom;
  }

  & > i {
    @include box-shadow(
      inset 0 100px 50px -30px rgb(38, 38, 38),
      inset 0 -100px 50px -30px rgb(38, 38, 38)
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

  section div {
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
    }
  }
}

#history {
  position: relative;
  overflow: hidden;
  padding-top: 20px;

  & > img {
    width: 36%;
    z-index: 1;
    position: absolute;
    left: 3vw;
    bottom: -15vw;
    opacity: 0.06;
    transform: rotate(-20deg);
  }

  section {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      bottom: 0;
      width: 4px;
      background-color: #fff;
    }

    .entries {
      //position: relative;

      .entry {
        width: calc(50% - 50px);
        float: left;
        padding: 26px 0;
        clear: both;
        text-align: right;

        &:not(:first-child) {
          margin-top: -56px;
        }

        .title {
          font-size: 32px;
          margin-bottom: 12px;
          position: relative;

          &:before {
            content: "";
            position: absolute;
            width: 8px;
            height: 8px;
            border: 4px solid #ffffff;
            background-color: #1d1d1d;
            border-radius: 100%;
            top: 50%;
            transform: translateY(-50%);
            right: -60px;
            z-index: 1000;
          }

          &.big:before {
            width: 24px;
            height: 24px;
            transform: translate(8px, -50%);
          }
        }

        .body {
          color: var(--subtext-color);

          p {
            line-height: 1.4em;
          }
        }

        &:nth-child(2n) {
          text-align: left;
          float: right;

          .title {
            &:before {
              left: -56px;
            }

            &.big:before {
              transform: translate(-8px, -50%);
            }
          }
        }
      }
    }
  }
}
</style>
