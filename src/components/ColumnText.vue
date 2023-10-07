<template>
  <div class="container">
    <div class="column">
      <h1>{{ header1 }}</h1>
      <p>{{ paragraph1 }}</p>
    </div>
    <div class="column">
      <h1>{{ header2 }}</h1>
      <p>{{ paragraph2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header1: String,
    paragraph1: String,
    header2: String,
    paragraph2: String,
  },
  name: "ColumnText", // Nome del tuo componente
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.column {
  flex-basis: 48%;
  /* Imposta la larghezza della colonna al 48% del contenitore */
}

h1 {
  font-weight: bold;
  font-size: medium;
}
</style>
