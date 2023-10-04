<template>
    <div>
      <h1>Checkout</h1>
      <br />
      <div v-if="mostraFormUtenteRegistrato">
        <!-- Form per utenti registrati -->
        <h2>Continua come utente registrato</h2>
        <LoginForm @accessoRiuscito="gestisciAccessoRiuscito" />
        <br />
        <span
          @click="mostraFormUtenteRegistrato = false"
          style="text-decoration: underline; cursor: pointer"
        >Continua come ospite</span
        >
      </div>
      <div v-else>
        <!-- Form per ospiti -->
        <h2>Continua come ospite</h2>
        <FormOspiti @accessoOspite="gestisciAccessoOspite" :disabilitaForm="mostraDatiOspite" />
        <br />
  
        <!-- Bottone "Vai al riepilogo" -->
        <div class="d-flex justify-content-end mt-4">
          <button @click="vaiAlRiepilogo" class="btn btn-success">
            Vai al riepilogo
          </button>
        </div>
  
        <!-- Visualizza il nome e il cognome dell'ospite solo se mostraDatiOspite è true -->
        <div v-if="mostraDatiOspite">
          <h2>Riepilogo ordine</h2>
          <p>Nome utente ospite: {{ ospite.nome }}</p>
          <p>Cognome utente ospite: {{ ospite.cognome }}</p>
          <p>Email utente ospite: {{ ospite.email }}</p>
          <p>Indirizzo di spedizione: {{ ospite.indirizzo }}</p>
          <p>Numero di cellulare: {{ ospite.telefono }}</p>
  
          <!-- Visualizza le scarpe nel carrello -->
          <h2>Scarpe nel carrello:</h2>
          <ul>
            <li v-for="(scarpa, index) in scarpeNelCarrello" :key="index">
              {{ scarpa.product }} - {{ scarpa.price }} €
            </li>
          </ul>
          <p style="text-align: right;"><strong> Totale del carrello: </strong> {{ totaleCarrello }} €</p>
        </div>
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
        ospite: {
          nome: "",
          cognome: "",
          email: "",
          indirizzo: "",
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
},
    methods: {
      gestisciAccessoOspite(datiOspite) {
        this.ospite = datiOspite;
      },
      vaiAlRiepilogo() {
        // Aggiungi il codice per passare ai dettagli del riepilogo qui, se necessario.
        // Imposta la variabile per mostrare il nome e il cognome
        this.mostraDatiOspite = true;
      },
    },
  };
  </script>
  