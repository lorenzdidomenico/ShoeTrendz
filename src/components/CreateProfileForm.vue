<template>
  <div>
    <h2>Inserisci un nuovo utente</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group row">
        <label for="nome" class="col-sm-3 col-form-label">Nome:</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="nome"
            v-model="nuovoUtente.nome"
            required
            class="form-control"
          />
        </div>
      </div>
      <br />
      <div class="form-group row">
        <label for="cognome" class="col-sm-3 col-form-label">Cognome:</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="cognome"
            v-model="nuovoUtente.cognome"
            required
            class="form-control"
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="telefono" class="col-sm-3 col-form-label">Telefono:</label>
        <div class="col-sm-9">
          <input
            type="tel"
            id="telefono"
            v-model="nuovoUtente.telefono"
            required
            class="form-control"
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="email" class="col-sm-3 col-form-label">Email:</label>
        <div class="col-sm-9">
          <input
            type="email"
            id="email"
            v-model="nuovoUtente.email"
            required
            class="form-control"
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="password" class="col-sm-3 col-form-label">Password:</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="password"
            v-model="nuovoUtente.password"
            required
            class="form-control"
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="indirizzo" class="col-sm-3 col-form-label">Indirizzo:</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="indirizzo"
            v-model="nuovoUtente.indirizzo"
            required
            class="form-control"
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="città" class="col-sm-3 col-form-label">Città:</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="città"
            v-model="nuovoUtente.città"
            required
            class="form-control"
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="provincia" class="col-sm-3 col-form-label">Provincia:</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="provincia"
            v-model="nuovoUtente.provincia"
            required
            class="form-control"
          />
        </div>
      </div>
      <br />

      <div class="form-group">
        <button type="submit" class="btn btn-primary">Salva</button>
      </div>
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
        telefono: "",
        email: "",
        password: "",
        indirizzo: "",
        città: "",
        provincia: "",
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
