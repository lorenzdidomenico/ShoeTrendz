<template>
  <div>
    <h2>Accesso</h2>
    <form @submit.prevent="effettuaAccesso">
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" required />
      </div>
      <div>
        <label for="cognome">Cognome:</label>
        <input type="text" id="cognome" v-model="cognome" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <button type="submit">Accedi</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nome: "",
      cognome: "",
      email: "",
    };
  },
  methods: {
    async effettuaAccesso() {
      // Esegui la richiesta HTTP per ottenere i dati utente dal file JSON
      try {
        const response = await axios.get("http://localhost:3001/utenti");
        const utenti = response.data;

        // Verifica se esiste un utente con le credenziali inserite
        const utenteTrovato = utenti.some(
          (utente) =>
            this.nome === utente.nome &&
            this.cognome === utente.cognome &&
            this.email === utente.email
        );

        if (utenteTrovato) {
          // Esegui azioni per l'accesso riuscito
          alert("Accesso riuscito!");
        } else {
          // Esegui azioni per l'accesso non riuscito
          alert("Credenziali non valide. Riprova.");
        }
      } catch (error) {
        console.error("Errore durante la richiesta HTTP:", error);
        // Gestisci l'errore in modo appropriato, ad esempio, mostrando un messaggio di errore all'utente
      }
    },
  },
};
</script>

<style scoped></style>
