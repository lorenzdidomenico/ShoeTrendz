<template>
  <div>
    <h1>Carrello</h1>
    <h2>Contenuto del Carrello</h2>
    <ul>
      <li v-for="(scarpa, index) in scarpeNelCarrello" :key="index">
        <!-- Verifica se 'scarpa' è definita e se ha le proprietà 'product' e 'price' -->
        <template v-if="scarpa && scarpa.product && scarpa.price">
          {{ scarpa.product }} - {{ scarpa.price }} €
        </template>
      </li>
    </ul>
    <p v-if="scarpeNelCarrello.length === 0">
      Nessun prodotto aggiunto al carrello
    </p>
    <hr v-if="scarpeNelCarrello.length > 0" />
    <!-- Mostra l'ammontare totale del carrello -->
    <p v-if="scarpeNelCarrello.length > 0" style="text-align: right">
      <strong>Totale:</strong> {{ calcolaTotaleCarrello() }} €
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["scarpeNelCarrello"]),
  },
  methods: {
    // Funzione per calcolare l'ammontare totale del carrello
    calcolaTotaleCarrello() {
      let totale = 0;
      this.scarpeNelCarrello.forEach((scarpa) => {
        if (scarpa && scarpa.price) {
          totale += scarpa.price;
        }
      });
      return totale;
    },
  },
};
</script>

<style scoped></style>
