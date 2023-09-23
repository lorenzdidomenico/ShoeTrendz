<template>
  <div>
    <h1>Profilo utente</h1>

    <!-- Mostra il form di accesso -->
    <LoginForm @accessoRiuscito="gestisciAccessoRiuscito" />
    <br />
    <router-link v-bind:to="{ name: 'nuovoUtente' }"
      >Non sei registrato? Crea il tuo profilo!</router-link
    >
  </div>
</template>

<script>
import axios from "axios";
import LoginForm from "@/components/LoginForm.vue"; // Assicurati che il percorso sia corretto

export default {
  components: {
    LoginForm, // Registra il componente LoginForm
  },
  data() {
    return {
      utenti: [], // Inizializza l'array utenti
    };
  },
  created() {
    axios
      .get("http://localhost:3001/utenti")
      .then((response) => {
        this.utenti = response.data; // Usa `response` invece di `responde`
      })
      .catch((error) => {
        console.error(error); // Stampa l'errore per il debugging
      });
  },
  methods: {
    gestisciAccessoRiuscito() {
      // Questo metodo sarà chiamato quando l'accesso avrà successo
      // Puoi eseguire azioni aggiuntive qui se necessario
      alert("Accesso riuscito!");
    },
  },
};
</script>
