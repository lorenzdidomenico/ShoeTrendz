<template>
  <div id="nav" class="nav">
    <div class="brand">
      <img
        src="https://www.stickersmurali.com/it/img/as1281-jpg/folder/products-listado-merchanthover/adesivi-murali-logo-nike.jpg"
      />
      Nike
    </div>
    <nav>
      <router-link v-bind:to="{ name: 'shoes-list' }">Scarpe</router-link> |
      <router-link v-bind:to="{ name: 'carrello' }">Carrello</router-link>
      | Scarpe: {{ numeroScarpe }} | Carrello ({{ carrello }})
      <button @click="svuotaCarrello">Svuota</button>
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
  margin-right: 10px;
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
</style>
