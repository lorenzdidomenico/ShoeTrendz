<template>
  <div class="totale">
    <h1>Checkout</h1>
    <br />

    <div v-if="mostraFormUtenteRegistrato">
      <!-- Form per utenti registrati -->
      <h2>Continua come utente registrato</h2>
      <LoginForm @accessoRiuscito="gestisciAccessoRiuscito" :mostraDatiUtenteRegistrato="mostraDatiUtenteRegistrato" />
      <br />
      <span @click="mostraFormUtenteRegistrato = false" style="text-decoration: underline; cursor: pointer"
        v-if="!formInviato && !mostraDatiUtenteRegistrato">Continua come ospite</span>
      <br />
    </div>

    <div v-else>
      <!-- Form per ospiti -->
      <h2>Continua come ospite</h2>
      <FormOspiti @accessoOspite="gestisciAccessoOspite" :disabilitaForm="mostraDatiOspite" />
      <br />
      <span @click="mostraFormUtenteRegistrato = true" style="text-decoration: underline; cursor: pointer"
        v-if="!formInviato && !mostraDatiOspite">Continua come utente registrato</span>
      <br />
    </div>

    <!-- Visualizza le scarpe nel carrello -->
    <br />
    <h2>RIEPILOGO ORDINE</h2>
    <h3>Scarpe nel carrello:</h3>

    <div v-if="scarpeNelCarrello.length === 0">
      <p>Il tuo carrello è vuoto.</p>
    </div>

    <ul>
      <li v-for="(scarpa, index) in scarpeNelCarrello" :key="index">
        {{ scarpa.product }} - {{ scarpa.price }} €
      </li>
    </ul>

    <p style="text-align: right">
      <strong> Totale del carrello: </strong> {{ totaleScontato }} €<sup>&ast;</sup>
      <br />
    </p>

    <p v-if="!mostraDatiUtenteRegistrato" style="text-align: right">
      <sup>&ast;</sup> Spese di spedizione 5€
    </p>

    <p v-if="mostraDatiUtenteRegistrato" style="text-align: right">
      <span style="color: green">Spedizione gratuita per utenti registrati !</span>
      <br />
      <strong> Totale del carrello: </strong> {{ totaleScontato - 5 }} €
    </p>

    <h3>Hai un codice sconto?</h3>
    <input v-model="codiceSconto" placeholder="Inserisci il codice sconto" />
    <button @click="applicaSconto" class="sconto-button">Applica Sconto</button>

    <!-- Visualizza l'importo dello sconto solo se lo sconto è stato applicato -->
    <p v-if="scontoApplicato" style="text-align: right; color: green; font-weight: bold">
      Sconto applicato: -{{ (totaleCarrello - totaleScontato).toFixed(2) }} €
    </p>

    <!-- Visualizza i dati dell'utente registrato -->
    <div v-if="mostraDatiUtenteRegistrato">
      <br />
      <h2>DATI UTENTE REGISTRATO</h2>
      <p>Nome: {{ datiUtente.nome }}</p>
      <p>Cognome: {{ datiUtente.cognome }}</p>
      <p>Email: {{ datiUtente.email }}</p>
      <p>Telefono: {{ datiUtente.telefono }}</p>
      <p>
        Indirizzo di spedizione: {{ datiUtente.indirizzo }},
        {{ datiUtente.città }}, {{ datiUtente.provincia }}
      </p>
    </div>

    <!-- Visualizza i dati dell'utente ospite -->
    <div v-if="mostraDatiOspite">
      <br />
      <h2>DATI UTENTE OSPITE</h2>
      <p>Nome utente ospite: {{ ospite.nome }}</p>
      <p>Cognome utente ospite: {{ ospite.cognome }}</p>
      <p>Email utente ospite: {{ ospite.email }}</p>
      <p>Telefono utente ospite: {{ ospite.telefono }}</p>
      <p>
        Indirizzo utente ospite: {{ ospite.indirizzo }}, {{ ospite.città }},
        {{ ospite.provincia }}
      </p>
    </div>

    <br />

    <div v-if="mostraDatiOspite || mostraDatiUtenteRegistrato" class="d-flex justify-content-end">
      <button class="btn btn-primary" style="text-align: right" @click="vaiPagamento">
        Procedi al pagamento
      </button>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import FormOspiti from "@/components/FormOspiti.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  components: {
    LoginForm,
    FormOspiti,
  },
  data() {
    return {
      mostraFormUtenteRegistrato: true,
      scontoApplicato: false,
      datiUtente: {}, 
      mostraDatiUtenteRegistrato: false, 
      ospite: {
        nome: "",
        cognome: "",
        email: "",
        indirizzo: "",
        città: "",
        provincia: "",
        telefono: "",
      },
      mostraDatiOspite: false, 
    };
  },
  computed: {
    ...mapGetters(["scarpeNelCarrello"]),
    totaleCarrello() {
      let totale = 0;
      this.scarpeNelCarrello.forEach((scarpa) => {
        if (scarpa && scarpa.price) {
          totale += scarpa.price;
        }
      });
      totale += 5;
      return totale;
    },
    totaleScontato() {
      let totale = 0;
      this.scarpeNelCarrello.forEach((scarpa) => {
        if (scarpa && scarpa.price) {
          totale += scarpa.price;
        }
      });
      totale += 5;
      if (this.scontoApplicato) {
        totale *= 0.5;
      }
      return totale;
    },
  },
  methods: {
    gestisciAccessoOspite(datiOspite) {
      this.ospite = datiOspite;
      this.mostraDatiOspite = true;
    },
    async gestisciAccessoRiuscito(datiUtente) {
      this.datiUtente = datiUtente;
      this.mostraDatiUtenteRegistrato = true; 

      // Recupera i dati dell'utente registrato
      await this.recuperaDatiUtenteRegistrato();
    },
    async recuperaDatiUtenteRegistrato() {
      try {
        // Esegui la richiesta HTTP per ottenere i dati dell'utente registrato
        const response = await axios.get(
          `http://localhost:3001/utenti/${this.datiUtente.id}`
        );
        this.datiUtente = response.data;
      } catch (error) {
        console.error(
          "Errore durante il recupero dei dati dell'utente registrato:",
          error
        );
        // Gestisci l'errore in modo appropriato, ad esempio, mostrando un messaggio di errore all'utente
      }
    },
    vaiAlRiepilogoUtenteOspite() {
      this.mostraDatiOspite = true;
    },

    applicaSconto() {
   
      if (!this.scontoApplicato) {
        if (this.codiceSconto === "TRENDZ50") {
          this.scontoApplicato = true; 

          alert("Codice sconto riscattato correttamente!");
        } else {
          alert("Codice sconto non valido");
        }
      } else {
        alert("Il codice sconto è stato già riscattato.");
      }
    },

    vaiPagamento() {
      if (this.scarpeNelCarrello.length === 0) {
        alert("Carrello vuoto! Aggiungi prodotti al carrello prima di procedere.");
        this.$router.push({ name: "shoes-list" });
        return;
      } else {
        this.$router.push({ name: 'pagamento' });
      }
    }
  },
};
</script>

<style>
.sconto-button {
  background-color: #5dc746;
}

@media screen and (max-width: 992px) and (min-width: 768px) {
  .totale {
    margin-right: 50px;
  }
}
</style>
