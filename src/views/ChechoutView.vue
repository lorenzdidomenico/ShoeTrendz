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
      <strong> Totale del carrello: </strong> {{ totaleCarrello }} €
    </p>

    <!-- Visualizza i dati dell'utente registrato -->
    <div v-if="mostraDatiUtenteRegistrato">
      <h2>DATI UTENTE REGISTRATO</h2>
      <p>Nome: {{ datiUtente.nome }}</p>
      <p>Cognome: {{ datiUtente.cognome }}</p>
      <p>Email: {{ datiUtente.email }}</p>
      <!-- Altri campi dati dell'utente registrato -->
    </div>

    <!-- Visualizza i dati dell'utente ospite -->
    <div v-if="mostraDatiOspite">
      <h2>DATI UTENTE OSPITE</h2>
      <p>Nome utente ospite: {{ ospite.nome }}</p>
      <p>Cognome utente ospite: {{ ospite.cognome }}</p>
      <p>Indirizzo utente ospite: {{ ospite.indirizzo }}</p>
      <p>Email utente ospite: {{ ospite.email }}</p>
      <p>Telefono utente ospite: {{ ospite.telefono }}</p>
      <!-- Altri campi dati dell'utente ospite -->
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import FormOspiti from "@/components/FormOspiti.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    LoginForm,
    FormOspiti,
  },
  data() {
    return {
      mostraFormUtenteRegistrato: true,
      datiUtente: {}, // Dati dell'utente registrato
      mostraDatiUtenteRegistrato: false, // Mostra i dati dell'utente registrato
      ospite: {
        nome: "",
        cognome: "",
        email: "",
        indirizzo: "",
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
  },
  methods: {
    gestisciAccessoOspite(datiOspite) {
      this.ospite = datiOspite;
      this.mostraDatiOspite = true; // Mostra i dati dell'utente ospite
    },
    gestisciAccessoRiuscito(datiUtente) {
      this.datiUtente = datiUtente;
      this.mostraDatiUtenteRegistrato = true; // Mostra i dati dell'utente registrato
    },
    vaiAlRiepilogoUtenteOspite() {
      this.mostraDatiOspite = true;
    },
  },
};
</script>
