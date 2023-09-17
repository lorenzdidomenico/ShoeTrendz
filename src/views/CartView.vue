<template>
  <div>
    <h1>Contenuto del Carrello</h1>
    <ul>
      <li v-for="(scarpa, index) in scarpeNelCarrello" :key="index">
        <!-- Verifica se 'scarpa' è definita e se ha le proprietà 'product' e 'price' -->
        <template v-if="scarpa && scarpa.product && scarpa.price">
          {{ scarpa.product }} - {{ scarpa.price }} €
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["scarpeNelCarrello"]),
  },
};
</script>

<style scoped></style>
