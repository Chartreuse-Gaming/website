<template>
  <main>
    <h1 class="hidden">Chartreuse Gaming</h1>
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
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped lang="scss">
@import "node_modules/compass-mixins/lib/compass/css3";

main {
  margin-top: 90px;
}

#old-tournaments {
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
    width: 100%;
    height: 100%;
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
    }

    img {
      width: 44%;
      aspect-ratio: 16/9;
      border-radius: 8px;
      box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
    }
  }
}
</style>
