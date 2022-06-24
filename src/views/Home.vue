<template>
  <main>
    <h1 class="hidden">Chartreuse Gaming</h1>
    <article id="old-tournaments" class="content">
      <h2>{{ $t("previous-tournaments") }}</h2>
      <section>
        <router-link to="/">
          <div>
            <img
              src="@/assets/img/CEC_5.jpg"
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
              src="@/assets/img/CGW_Crous.jpg"
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
              src="@/assets/img/CGW_Grenoble.jpg"
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
              src="@/assets/img/CEC_4.jpg"
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
            <img src="@/assets/img/SJV.jpg" alt="Salon du Jeu Vidéo" />
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
              src="@/assets/img/CEC_3.jpg"
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
      <router-link to="/" class="btn">Charger plus</router-link>
    </article>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped lang="scss">
main {
  margin-top: 90px;
}

#old-tournaments {
  h2 {
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
</style>
