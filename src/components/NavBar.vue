<template>
  <div id="nav" class="nav navbar navbar-expand-lg" :style="{ height: isNavbarOpen ? 'auto' : '60px' }">

    <div class="brand">
      <router-link v-bind:to="{ name: 'indexView' }">
        <img src="@/assets/logo.png" class="logo" />
      </router-link>

      <router-link v-bind:to="{ name: 'indexView' }">
        <h3 class="brandname">ShoeTrendz</h3>
      </router-link>
    </div>

    <button class="navbar-toggler" type="button" @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse ms-auto flex-column" :class="{ 'show': isNavbarOpen }" id="navbarNav">
      <nav class="navigazione ms-auto">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <router-link class="nav-link" v-bind:to="{ name: 'indexView' }">Novità e tendenze</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{ name: 'shoes-list' }">Prodotti</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{ name: 'utente' }">
              <img src="@/assets/UserIcon.png" alt="Utente" class="User-icon" />
            </router-link>
          </li>

          <li class="nav-item linea">
            <router-link class="nav-link" v-bind:to="{ name: 'carrello' }">
              <img src="@/assets/BagIcon.png" alt="Carrello" class="carrello-icon" /> ({{ carrello }})
            </router-link>
          </li>

          <button @click="svuotaCarrello" class="Svuota-button">Svuota</button>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  computed: {
    carrello: function () {
      return this.$store.state.carrello;
    },
  },
  methods: {
    svuotaCarrello: function () {
      this.$store.commit("SVUOTA_CARRELLO");
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<style scoped>

.logo {
  width: 100px;
  height: 60px;
}

.navigazione {
  margin-bottom: 15px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #0cadbe;
  padding-left: 10px;
  padding-right: 10px;
}

.brand {
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #000000;
  text-decoration: none;
}

.brand img {
  max-width: 40px;
  margin-right: 20px;
}

.nav .nav-item {
  box-sizing: border-box;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  font-size: medium;


}

.nav .nav-item:hover a.nav-link {
  color: #ffffff;
  font-size: 300;
  font-weight: bold;
}

.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}

.nav a {
  color: black;
}

.Svuota-button {
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 20px;
  margin-left: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.Svuota-button:hover {
  background-color: white;
  color: #000000;
}

.linea {
  text-decoration: none;
}
.brandname {
  text-decoration: none;
  font-weight: bold;
  font-size: 2 em;
  color: #ffffff;
}

.User-icon,
.carrello-icon {
  width: 28px;
  height: auto;
}

/* Inversione colori icone omino e carrello */
.User-icon:hover {
  filter: brightness(0) invert(1);
}

.carrello-icon:hover{
  filter: brightness(0) invert(1);
}

@media screen and (max-width: 992px) {
  .navigazione {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: #0cadbe;
    width: 100%;
  }

}
</style>
