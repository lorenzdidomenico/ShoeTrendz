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
        // Chiamate le mutazione per aggiungere la scarpa al carrello
        this.$store.commit("AGGIUNGI_CARRELLO", this.shoe);

        alert("Prodotto aggiunto al carrello!");


      }
    },
  },
  props: {
    shoe: Object, // Si riceve la scarpa come prop dal componente padre
  },
};
</script>

<style>
.custom-add-to-cart-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
}

/* Stile del pulsante quando è disabilitato */
.custom-add-to-cart-button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  border-radius: 10px;
}

.custom-add-to-cart-button:active {
  background-color: #0056b3;
  color: #fff;
  border-radius: 10px;
}

/* Stile del pulsante quando ci si passa sopra con il mouse */
.custom-add-to-cart-button:hover {
  background-color: #0056b3;
}
</style>
