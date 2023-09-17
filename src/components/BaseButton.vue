<template>
  <div>
    <button @click="aggiungiAlCarrello">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    aggiungiAlCarrello() {
      // Chiama la mutazione per aggiungere la scarpa al carrello
      this.$store.commit("AGGIUNGI_CARRELLO", this.shoe);
      this.$store.commit("AGGIORNA_CONTEGGIO_CARRELLO");
    },
  },
  props: {
    shoe: Object, // Ricevi la scarpa come prop dal componente padre
  },
};
</script>
