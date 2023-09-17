<template>
  <div class="cart-item">
    <h3>{{ item.product }}</h3>
    <p>Prezzo: {{ item.price }} euro</p>
    <!-- Altre informazioni sull'elemento nel carrello -->
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
/* Stili per il componente CartCard */
.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
