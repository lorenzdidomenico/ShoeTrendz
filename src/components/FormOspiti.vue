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
          :disabled="disabilitaForm"
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
          :disabled="disabilitaForm"
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
          :disabled="disabilitaForm"
        />
      </div>
    </div>
    <br />

    <div class="form-group row">
      <label for="telefono" class="col-sm-3 col-form-label">Numero di Telefono:</label>
      <div class="col-sm-9">
        <input
          type="text"
          id="telefono"
          v-model="telefono"
          required
          class="form-control"
          :disabled="disabilitaForm"
        />
      </div>
    </div>
    <br />

    <div class="form-group row">
      <label for="indirizzo" class="col-sm-3 col-form-label">Indirizzo di Spedizione:</label>
      <div class="col-sm-9">
        <input
          type="text"
          id="indirizzo"
          v-model="indirizzo"
          required
          class="form-control"
          :disabled="disabilitaForm"
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
          v-model="città"
          required
          class="form-control"
          :disabled="disabilitaForm"
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
          v-model="provincia"
          required
          class="form-control"
          :disabled="disabilitaForm"
        />
      </div>
    </div>
    <br />

    <div class="form-group">
      <button type="submit" class="btn btn-primary" :disabled="disabilitaForm">Invia</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    disabilitaForm: Boolean,
  },
  data() {
    return {
      nome: "",
      cognome: "",
      email: "",
      indirizzo: "",
      telefono: "",
      città: "",
      provincia: "",
    };
  },
  methods: {
    async inviaFormOspite() {
      this.$emit("accessoOspite", {
        nome: this.nome,
        cognome: this.cognome,
        email: this.email,
        indirizzo: this.indirizzo,
        telefono: this.telefono,
        città: this.città,
        provincia: this.provincia,
      });
      alert("Dati inviati correttamente");
    },
  },
};
</script>

<style scoped></style>
