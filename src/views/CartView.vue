<!--<template>
  <div>
    <h1>Carrello</h1>
    <div v-if="cartItems.length === 0">
      <p>Il carrello è vuoto.</p>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id">
        <CartCard :item="item"></CartCard>
      </div>
    </div>
  </div>
</template>
-->

<div v-if="cartItems.length === 0">
  <p>Il carrello è vuoto.</p>
</div>
<div v-else>
  <!-- Itera sugli elementi nel carrello e visualizzali qui -->
</div>

<script>
export default {
  data() {
    return {
      cartItems: [], // Assicurati che cartItems sia inizializzata come un array vuoto
    };
  },
};
</script>
