<template>
  <div>
    <h1>Checkout</h1>
    <br />
    <div v-if="mostraFormUtenteRegistrato">
      <!-- Form per utenti registrati -->
      <h2>Continua come utente registrato</h2>
      <LoginForm
        @accessoRiuscito="gestisciAccessoRiuscito"
        :mostraDatiUtenteRegistrato="mostraDatiUtenteRegistrato"
      />
      <br />
      <span
        @click="mostraFormUtenteRegistrato = false"
        style="text-decoration: underline; cursor: pointer"
        v-if="!formInviato && !mostraDatiUtenteRegistrato"
        >Continua come ospite</span
      >
      <br />
    </div>
    <div v-else>
      <!-- Form per ospiti -->
      <h2>Continua come ospite</h2>
      <FormOspiti
        @accessoOspite="gestisciAccessoOspite"
        :disabilitaForm="mostraDatiOspite"
      />
      <br />
      <span
        @click="mostraFormUtenteRegistrato = true"
        style="text-decoration: underline; cursor: pointer"
        v-if="!formInviato && !mostraDatiOspite"
        >Continua come utente registrato</span
      >
      <br />
    </div>

    <!-- Visualizza le scarpe nel carrello -->
    <br />
    <h2>RIEPILOGO ORDINE</h2>
    <h3>Scarpe nel carrello:</h3>
    <ul>
      <li v-for="(scarpa, index) in scarpeNelCarrello" :key="index">
        {{ scarpa.product }} - {{ scarpa.price }} €
      </li>
    </ul>
    <p style="text-align: right">
      <strong> Totale del carrello: </strong> {{ totaleScontato }} €
    </p>

    <h3>Hai un codice sconto?</h3>
    <input v-model="codiceSconto" placeholder="Inserisci il codice sconto" />
    <button @click="applicaSconto" class="sconto-button">Applica Sconto</button>

    <!-- Mostra l'importo dello sconto solo se lo sconto è stato applicato -->
    <p
      v-if="scontoApplicato"
      style="text-align: right; color: green; font-weight: bold"
    >
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
      <!-- Altri campi dati dell'utente registrato -->
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
      <!-- Altri campi dati dell'utente ospite -->
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
      datiUtente: {}, // Dati dell'utente registrato
      mostraDatiUtenteRegistrato: false, // Mostra i dati dell'utente registrato
      ospite: {
        nome: "",
        cognome: "",
        email: "",
        indirizzo: "",
        città: "",
        provincia: "",
        telefono: "",
      },
      mostraDatiOspite: false, // Mostra i dati dell'utente ospite
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
        // Applica lo sconto solo se è stato applicato
        totale *= 0.5;
      }
      return totale;
    },
  },
  methods: {
    gestisciAccessoOspite(datiOspite) {
      this.ospite = datiOspite;
      this.mostraDatiOspite = true; // Mostra i dati dell'utente ospite
    },
    async gestisciAccessoRiuscito(datiUtente) {
      this.datiUtente = datiUtente;
      this.mostraDatiUtenteRegistrato = true; // Mostra i dati dell'utente registrato

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
      // Logica per applicare lo sconto
      if (!this.scontoApplicato) {
        if (this.codiceSconto === "LORENZO50") {
          this.scontoApplicato = true; // Applica lo sconto al totale del carrello

          alert("Codice sconto riscattato correttamente!");
        } else {
          alert("Codice sconto non valido");
        }
      } else {
        alert("Il codice sconto è stato già riscattato.");
      }
    },
  },
};
</script>

<style>
.sconto-button {
  background-color: #5dc746;
}
</style>
