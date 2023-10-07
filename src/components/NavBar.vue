<template>
  <div id="nav" class="nav navbar navbar-expand-lg" :style="{ height: isNavbarOpen ? 'auto' : '60px' }">
    <div class="brand">
      <router-link v-bind:to="{ name: 'indexView' }">
        <img src="@/assets/logo.png" />
      </router-link>
      <router-link v-bind:to="{ name: 'indexView' }">
        <h3 class="brandname">ShoeTrendz</h3>
      </router-link>
    </div>
    <button class="navbar-toggler" type="button" @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-auto flex-column" :class="{ 'show': isNavbarOpen }" id="navbarNav">
      <nav class="navigazione">
        <router-link v-bind:to="{ name: 'indexView' }">Novità e tendenze</router-link> |
        <router-link v-bind:to="{ name: 'shoes-list' }">Prodotti</router-link> |
        Modelli scarpe disponibili: {{ numeroScarpe }} |
        <router-link v-bind:to="{ name: 'utente' }">
          <img src="@/assets/UserIcon.png" alt="Utente" class="User-icon" /></router-link> |

        <router-link v-bind:to="{ name: 'carrello' }" class="linea">
          <img src="@/assets/BagIcon.png" alt="Carrello" class="carrello-icon" /> ({{ carrello }})
        </router-link>
        &nbsp;<button @click="svuotaCarrello" class="Svuota-button">Svuota </button>&nbsp;
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
    numeroScarpe: function () {
      return this.$store.getters.numeroScarpe;
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
  /* Imposta la larghezza massima del logo */
  margin-right: 20px;
  /* Aggiunge spazio tra il logo e il nome del sito */
}

.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
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
  background-color: #ffffff;
  /* Colore di sfondo del pulsante (verde in questo caso) */
  color: #000000;
  /* Colore del testo del pulsante (bianco in questo caso) */
  border: none;
  /* Rimuovi il bordo del pulsante */
  border-radius: 10px;
  /* Bordo arrotondato del pulsante */
}

.Svuota-button:hover {
  background-color: black;
  color: #ffffff;
  /* Colore di sfondo al passaggio del mouse */
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
  /* Imposta la larghezza dell'immagine a 30 pixel */
  height: auto;
  /* Imposta l'altezza in base alla larghezza mantenendo l'aspetto originale */
  /* Oppure, se vuoi una dimensione specifica per l'altezza, puoi impostarla anche qui */
  /* height: 30px; */
}

@media screen and (max-width: 992px) {
  .navigazione {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #0cadbe
  }

  .navigazione router-link::after {
    content: none;
    /* Nascondi il testo "|" vicino alle voci del menu */
  }


}
</style>
