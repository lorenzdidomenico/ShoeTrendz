<!-- FormOspiti.vue -->

<template>
  <form @submit.prevent="inviaFormOspite" class="mt-4">
    <div class="form-group row">
      <label for="nome" class="col-sm-3 col-form-label">Nome:</label>
      <div class="col-sm-9">
        <input
          type="text"
          id="nome"
          v-model="nome"
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
          v-model="cognome"
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
          v-model="email"
          required
          class="form-control"
        />
      </div>
    </div>
    <br />

    <div class="form-group row">
      <label for="indirizzo" class="col-sm-3 col-form-label"
        >Indirizzo di Spedizione:</label
      >
      <div class="col-sm-9">
        <input
          type="text"
          id="indirizzo"
          v-model="indirizzo"
          required
          class="form-control"
        />
      </div>
    </div>
    <br />

    <div class="form-group row">
      <label for="telefono" class="col-sm-3 col-form-label"
        >Numero di Telefono:</label
      >
      <div class="col-sm-9">
        <input
          type="text"
          id="telefono"
          v-model="telefono"
          required
          class="form-control"
        />
      </div>
    </div>
    <br />

    <div class="form-group">
      <button type="submit" class="btn btn-primary">Invia</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      cognome: "",
      email: "",
      indirizzo: "",
      telefono: "",
    };
  },
  methods: {
    async inviaFormOspite() {
      // Gestisci l'invio del form per gli ospiti qui
      alert("Form per gli ospiti inviato con successo!");
    },
  },
};
</script>

<style scoped></style>
