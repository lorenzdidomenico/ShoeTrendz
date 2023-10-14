<template>
  <div>
    <h1>Profilo utente</h1> <br>
    <h2>Accedi</h2>

    <LoginForm @accessoRiuscito="gestisciAccessoRiuscito" />
    <br />
    <router-link v-bind:to="{ name: 'nuovoUtente' }"
      >Non sei registrato? Crea il tuo profilo!</router-link
    >
  </div>
</template>

<script>
import axios from "axios";
import LoginForm from "@/components/LoginForm.vue"; 

export default {
  components: {
    LoginForm, 
  },
  data() {
    return {
      utenti: [], 
    };
  },
  created() {
    axios
      .get("http://localhost:3001/utenti")
      .then((response) => {
        this.utenti = response.data; 
      })
      .catch((error) => {
        console.error(error); 
      });
  },
  methods: {
    gestisciAccessoRiuscito() {
      alert("Accesso riuscito!");
    },
  },
};
</script>
