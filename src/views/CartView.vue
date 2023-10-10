<template>
  <div>
    <h1>Il mio carrello</h1>

    <ul>
      <li v-for="(scarpa, index) in scarpeNelCarrello" :key="index">
        <!-- Verifica se 'scarpa' è definita e se ha le proprietà 'product' e 'price' -->
        <template v-if="scarpa && scarpa.product && scarpa.price">
          {{ scarpa.product }} - {{ scarpa.price }} €
        </template>
      </li>
    </ul>
    <p v-if="scarpeNelCarrello.length === 0">Il tuo carrello è vuoto</p>
    <hr v-if="scarpeNelCarrello.length > 0" class="total-amount" />

    <!-- Mostra il totale iniziale -->
    <p style="text-align: right">
      <strong>Totale:</strong> {{ totaleSenzaSpedizione }} €
    </p>

    <!-- Mostra il pulsante "Calcola Totale" solo se non è stato calcolato il totale con spedizione -->
    <button
      v-if="!mostraTotaleConSpedizione"
      @click="calcolaTotale"
      class="checkout-button"
    >
      Calcola Totale
    </button>

<!-- Mostra il totale con spedizione solo se è stato calcolato e totaleSenzaSpedizione è maggiore di 0 -->
<p v-if="mostraTotaleConSpedizione && totaleSenzaSpedizione > 0" style="text-align: right">
  <strong>Totale con spedizione:</strong> {{ totaleConSpedizione }} €
</p>

<!-- Mostra un messaggio diverso quando totaleSenzaSpedizione è uguale a 0 -->
<p v-else-if="mostraTotaleConSpedizione && totaleSenzaSpedizione === 0" style="text-align: right">
  Aggiungi prodotti al carrello per continuare
</p>

<!-- Mostra il pulsante "Checkout" solo se è stato calcolato il totale con spedizione e totaleSenzaSpedizione è maggiore di 0 -->

  <button v-if="mostraTotaleConSpedizione && totaleSenzaSpedizione > 0" @click="avviaCheckout" class="checkout-button">
    Checkout
  </button>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      costoSpedizione: 5, // Imposta il costo della spedizione desiderato
      mostraTotaleConSpedizione: false,
      codiceSconto: "",
      scontoRiscattato: false,
    };
  },
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
    calcolaTotale() {
      // Calcola il totale senza spedizione
      this.totaleSenzaSpedizione = this.calcolaTotaleCarrello();

      // Mostra il totale con il costo di spedizione
      this.totaleConSpedizione =
        this.totaleSenzaSpedizione + this.costoSpedizione;

      // Ora hai il totale con il costo di spedizione disponibile
      this.mostraTotaleConSpedizione = true;
    },
    avviaCheckout() {
     // Esegui il controllo se il carrello è vuoto
    if (this.scarpeNelCarrello.length === 0) {
      // Mostra un messaggio di "carrello vuoto" o esegui un'azione appropriata
      alert("Carrello vuoto! Aggiungi prodotti al carrello prima di procedere.");
      window.location.reload();
      return;
    } else {
      // Altrimenti, avvia il reindirizzamento alla vista "chechOut"
      this.$router.push({ name: 'chechOut' });
    }
    },
  },
};
</script>

<style>
.total-amount {
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;

  /* Aggiungi una transizione al cambio di colore */
}

.checkout-button {
  background-color: #007bff;
  /* Colore di sfondo */
  color: #fff;
  /* Colore del testo */
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  float: right;
}

.checkout-button:hover {
  background-color: #0056b3;
  /* Colore di sfondo al passaggio del mouse */
}
</style>
