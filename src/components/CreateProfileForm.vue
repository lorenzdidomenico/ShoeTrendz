<template>
  <div>
    <h2>Inserisci un nuovo utente</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nuovoUtente.nome" required />
      </div>
      <div>
        <label for="cognome">Cognome:</label>
        <input
          type="text"
          id="cognome"
          v-model="nuovoUtente.cognome"
          required
        />
      </div>
      <div>
        <label for="eta">Età:</label>
        <input type="number" id="eta" v-model="nuovoUtente.eta" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="nuovoUtente.email" required />
      </div>
      <button type="submit">Salva</button>
    </form>
    <div v-if="messaggioConferma" class="alert">{{ messaggioConferma }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nuovoUtente: {
        id: "",
        nome: "",
        cognome: "",
        eta: null,
        email: "",
      },
      messaggioConferma: "",
    };
  },
  methods: {
    onSubmit: function () {
      axios
        .post("http://localhost:3001/utenti", this.nuovoUtente)
        .then((response) => {
          console.log(response.data);
          this.messaggioConferma =
            "Profilo creato correttamente. Verrai ora reindirizzato al login"; // Imposta il messaggio
          setTimeout(() => {
            this.messaggioConferma = ""; // Nascondi il messaggio dopo qualche secondo
            this.$router.push({ name: "utente" }); // Reindirizza a ProfileView
          }, 5000); // Nascondi il messaggio dopo 3 secondi (puoi modificare il tempo)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.alert {
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 4px;
}
</style>
