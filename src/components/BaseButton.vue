<template>
  <div>
    <button @click="aggiungiAlCarrello" :disabled="shoe.inventory === 0" class="custom-add-to-cart-button">
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

<style>
/* Stile del pulsante quando è abilitato */
.custom-add-to-cart-button {
  background-color: #007bff;
  /* Cambia il colore di sfondo azzurro */
  color: #fff;
  /* Cambia il colore del testo a bianco */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
}

/* Stile del pulsante quando è disabilitato */
.custom-add-to-cart-button:disabled {
  background-color: #ccc;
  /* Cambia il colore di sfondo a grigio quando è disabilitato */
  color: #666;
  /* Cambia il colore del testo a grigio scuro quando è disabilitato */
  cursor: not-allowed;
  /* Cambia il cursore a "non consentito" quando è disabilitato */
  border-radius: 10px;
}

.custom-add-to-cart-button:active {
  background-color: #0056b3;
  /* Cambia il colore di sfondo azzurro più scuro quando è premuto */
  color: #fff;
  /* Cambia il colore del testo a bianco quando è premuto */
  border-radius: 10px;
}

/* Stile del pulsante quando ci passi sopra con il mouse */
.custom-add-to-cart-button:hover {
  background-color: #0056b3;
  /* Cambia il colore di sfondo azzurro più scuro quando ci passi sopra con il mouse */
}
</style>
