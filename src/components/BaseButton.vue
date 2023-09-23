<template>
  <div>
    <button @click="aggiungiAlCarrello" :disabled="shoe.inventory === 0">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    aggiungiAlCarrello() {
      if (this.shoe.inventory > 0) {
        // Chiama la mutazione per aggiungere la scarpa al carrello
        this.$store.commit("AGGIUNGI_CARRELLO", this.shoe);
        this.$store.commit("AGGIORNA_CONTEGGIO_CARRELLO");
      }
    },
  },
  props: {
    shoe: Object, // Ricevi la scarpa come prop dal componente padre
  },
};
</script>
