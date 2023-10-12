<template>
  <div class="totale">
    <h1>Procedere al pagamento</h1>
    <br /><br />
    <h2>Inserire dati carta</h2>
    <br />

    <!-- Utilizziamo un unico form per tutti i campi -->
    <form @submit.prevent="procediPagamento" class="mt-4">
      <div class="form-group row">
        <label for="nome" class="col-sm-3 col-form-label"
          >Nome titolare carta:</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            id="nome"
            v-model="nome"
            required
            class="form-control"
            :disabled="pagamentoAvvenuto"
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="cognome" class="col-sm-3 col-form-label"
          >Cognome titolare carta:</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            id="cognome"
            v-model="cognome"
            required
            class="form-control"
            :disabled="pagamentoAvvenuto"
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="numero" class="col-sm-3 col-form-label"
          >Numero carta (senza trattini o spazi):</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            id="numero"
            v-model="numero"
            required
            class="form-control"
            :disabled="pagamentoAvvenuto"
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="scadenza" class="col-sm-3 col-form-label"
          >Scadenza carta:</label
        >
        <div class="col-sm-9">
          <input
            type="date"
            id="scadenza"
            v-model="scadenza"
            required
            class="form-control"
            :disabled="pagamentoAvvenuto"
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="cvc" class="col-sm-3 col-form-label">CVC:</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="cvc"
            v-model="cvc"
            required
            class="form-control"
            :disabled="pagamentoAvvenuto"
          />
        </div>
      </div>
      <br />

      <!-- Visualizza un messaggio di successo solo dopo il pagamento -->
      <div v-if="pagamentoAvvenuto" class="alert alert-success">
        PAGAMENTO AVVENUTO CON SUCCESSO <br />
        Verrai ora reidirizzato alla home
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="pagamentoAvvenuto"
      >
        Effettua il pagamento
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      nome: "",
      cognome: "",
      numero: "",
      scadenza: "",
      cvc: "",
      pagamentoAvvenuto: false,
    };
  },
  computed: {
    ...mapGetters(["scarpeNelCarrello"]),
  },
  methods: {
    procediPagamento() {
      if (this.scarpeNelCarrello.length === 0) {
    // Mostra un messaggio di "carrello vuoto" o esegui un'azione appropriata
    alert("Carrello vuoto! Aggiungi prodotti al carrello prima di procedere.");
    this.$router.push({ name: "shoes-list"});
      } else {
      this.pagamentoAvvenuto = true;
      this.$store.commit("SVUOTA_CARRELLO");
      setTimeout(() => {
        // Utilizza il router di Vue per reindirizzare l'utente a indexVue
        this.$router.push({ name: "indexView" });
      }, 3000); // 3000 millisecondi = 3 secondi
    }
  },
  },
};
</script>

<style scoped>
@media screen and (max-width: 992px) and (min-width: 768px) {
  .totale{
    margin-right: 50px;
  }
} 
</style>
