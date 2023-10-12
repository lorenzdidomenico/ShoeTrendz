<template>
  <div id="totale">
    <form @submit.prevent="effettuaAccesso">
      <div class="form-group row">
        <label for="email" class="col-sm-3 col-form-label">Email:</label>
        <div class="col-sm-9">
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="form-control"
            :disabled="mostraDatiUtenteRegistrato"
          />
        </div>
      </div>
      <br />
      <div class="form-group row">
        <label for="password" class="col-sm-3 col-form-label">Password:</label>
        <div class="col-sm-9">
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="form-control"
            :disabled="mostraDatiUtenteRegistrato"
          />
        </div>
      </div>
      <br />
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Accedi</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    mostraDatiUtenteRegistrato: Boolean,
  },
  data() {
    return {
      email: "",
      password: "",
      userId: null,
    };
  },
  methods: {
    async effettuaAccesso() {
      // Esegui la richiesta HTTP per ottenere i dati utente dal file JSON
      try {
        const response = await axios.get("http://localhost:3001/utenti");
        const utenti = response.data;

        // Verifica se esiste un utente con le credenziali inserite
        const utenteTrovato = utenti.find(
          (utente) =>
            this.email === utente.email &&
            this.password === utente.password
        );

        if (utenteTrovato) {
          // Salva l'ID dell'utente
          this.userId = utenteTrovato.id;

          // Emetti un evento con i dati dell'utente registrato
          this.$emit("accessoRiuscito", utenteTrovato);
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

<style scoped>
@media screen and (max-width: 992px) and (min-width: 768px) {
  #totale{
    margin-right: 50px;
  }
} 
</style>
