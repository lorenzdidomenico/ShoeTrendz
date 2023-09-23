<template>
  <div id="nav" class="nav">
    <div class="brand">
      <router-link v-bind:to="{ name: 'indexView' }">
        <img
          src="https://w7.pngwing.com/pngs/24/849/png-transparent-nike-free-shoe-sneakers-nike-men-s-casual-shoes-mens-fashion-outdoor-shoe.png"
        />
        ShoeTrendz.com</router-link
      >
    </div>
    <nav>
      <router-link v-bind:to="{ name: 'indexView' }">Home</router-link> |
      <router-link v-bind:to="{ name: 'shoes-list' }">Scarpe</router-link> |
      <router-link v-bind:to="{ name: 'carrello' }"
        >Carrello ({{ carrello }})</router-link
      >
      &nbsp; <button @click="svuotaCarrello">Svuota</button> &nbsp; | Modelli
      scarpe disponibili: {{ numeroScarpe }} |
      <router-link v-bind:to="{ name: 'utente' }">Utente</router-link>
    </nav>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #f6f6f6;
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
</style>
