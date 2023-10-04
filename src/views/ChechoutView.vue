<template>
  <div>
    <div v-if="mostraFormUtenteRegistrato">
      <!-- Form per utenti registrati -->
      <h1>Checkout</h1>
      <br />
      <h2>Continua come utente registrato</h2>
      <LoginForm @accessoRiuscito="gestisciAccessoRiuscito" /> <br />
      <span
        @click="mostraFormUtenteRegistrato = false"
        style="text-decoration: underline; cursor: pointer"
        >Continua come ospite</span
      >
    </div>
    <div v-else>
      <!-- Form per ospiti -->
      <h1>Checkout</h1>
      <br />
      <h2>Continua come ospite</h2>
      <FormOspiti @accessoOspite="gestisciAccessoOspite" /> <br />
      <span
        @click="mostraFormUtenteRegistrato = true"
        style="text-decoration: underline; cursor: pointer"
        >Continua come utente registrato</span
      >
    </div>

    <!-- Bottone "Vai al epilogo" -->
    <div class="d-flex justify-content-end mt-4">
      <button @click="vaiAlEpilogo" class="btn btn-success">
        Vai al epilogo
      </button>
    </div>

    <!-- Nome e cognome dell'utente -->
    <div v-if="utenteLoggato" class="mt-3 text-right">
      <p>Nome: {{ utenteLoggato.nome }}</p>
      <p>Cognome: {{ utenteLoggato.cognome }}</p>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import FormOspiti from "@/components/FormOspiti.vue";

export default {
  components: {
    LoginForm,
    FormOspiti,
  },
  data() {
    return {
      mostraFormUtenteRegistrato: true,
      utenteLoggato: null, // Inizialmente, nessun utente è loggato
    };
  },
  methods: {
    gestisciAccessoRiuscito(utente) {
      // Callback chiamato quando l'accesso come utente registrato ha successo
      this.utenteLoggato = utente;
      alert("Accesso riuscito!");
    },
    gestisciAccessoOspite() {
      // Callback chiamato quando l'accesso come ospite ha successo
      this.utenteLoggato = null; // Resetta l'utenteLoggato quando si accede come ospite
      alert("Accesso come ospite riuscito!");
    },
    vaiAlEpilogo() {
      if (this.utenteLoggato) {
        // Se un utente è loggato, stampa il nome e il cognome
        alert(
          `Nome: ${this.utenteLoggato.nome}\nCognome: ${this.utenteLoggato.cognome}`
        );
      } else {
        // Altrimenti, gestisci il caso in cui nessun utente è loggato
        alert("Nessun utente loggato.");
      }
    },
  },
};
</script>

<style scoped></style>
