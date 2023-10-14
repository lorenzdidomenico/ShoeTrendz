<template>
  <div class="totale">
    <h1>Il mio carrello</h1>

    <ul>
      <li v-for="(scarpa, index) in scarpeNelCarrello" :key="index">
        <template v-if="scarpa && scarpa.product && scarpa.price">
          {{ scarpa.product }} - {{ scarpa.price }} €
          <span @click="rimuoviDalCarrello(scarpa)" class="remove-icon"><i class="fas fa-trash-alt"></i></span>

        </template>
      </li>
    </ul>
    <p v-if="scarpeNelCarrello.length === 0">Il tuo carrello è vuoto</p>
    <hr v-if="scarpeNelCarrello.length > 0" class="total-amount" />

    <p style="text-align: right">
      <strong>Totale:</strong> {{ totaleSenzaSpedizione }} €
    </p>

    <!-- Mostra il pulsante "Calcola Totale" solo se non è stato calcolato il totale con spedizione -->
    <button v-if="!mostraTotaleConSpedizione" @click="calcolaTotale" class="checkout-button">
      Calcola Totale
    </button>

    <!-- Mostra il totale con spedizione solo se è stato calcolato e ci sono elementi nel carrello -->
    <p v-if="mostraTotaleConSpedizione && totaleSenzaSpedizione > 0" style="text-align: right">
      <strong>Totale con spedizione:</strong> {{ totaleConSpedizione }} €
    </p>

    <!-- Mostra un messaggio diverso quando non ci sono elementi nel carrello -->
    <p v-else-if="mostraTotaleConSpedizione && totaleSenzaSpedizione === 0" style="text-align: right">
      Aggiungi prodotti al carrello per continuare
    </p>

    <!-- Mostra il pulsante "Checkout" solo se è stato calcolato il totale con spedizione e ci sono elementi nel carrello -->
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
      costoSpedizione: 5,
      mostraTotaleConSpedizione: false,
      codiceSconto: "",
      scontoRiscattato: false,
    };
  },
  computed: {
    ...mapGetters(["scarpeNelCarrello"]),
  },
  methods: {
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
      this.totaleSenzaSpedizione = this.calcolaTotaleCarrello();

      this.totaleConSpedizione =
        this.totaleSenzaSpedizione + this.costoSpedizione;

      this.mostraTotaleConSpedizione = true;
    },

    avviaCheckout() {
      if (this.scarpeNelCarrello.length === 0) {
        alert("Carrello vuoto! Aggiungi prodotti al carrello prima di procedere.");
        this.$router.push({ name: "shoes-list" });
        return;
      } else {
        this.$router.push({ name: 'chechOut' });
      }
    },
    rimuoviDalCarrello(scarpa) {
      this.$store.commit("RIMUOVI_DAL_CARRELLO", scarpa);

      // Ricalcola il totale senza spedizione
      this.totaleSenzaSpedizione = this.calcolaTotaleCarrello();

      // Calcola il totale con il costo di spedizione
      this.totaleConSpedizione = this.totaleSenzaSpedizione + this.costoSpedizione;

      // Controlla se devi mostrare il totale con spedizione
      this.mostraTotaleConSpedizione = true;
      alert("Prodotto eliminato dal carrello!");
    },

  }
}
</script>

<style scoped>
/* ... Altri stili ... */

.remove-icon {
  color: red;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  float: right;
  /* Allinea l'icona a sinistra */
}

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

@media screen and (max-width: 992px) and (min-width: 768px) {
  .totale {
    margin-right: 50px;
  }
}
</style>
