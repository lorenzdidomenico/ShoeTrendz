<template>
  <div>
    <h1>Carrello</h1>
    <div v-if="cartItems.length === 0">
      <p>Il carrello è vuoto.</p>
    </div>
    <!-- Commenta il componente CartCard -->
    <!--
    <div v-else>
      <div v-for="item in cartItems" :key="item.id">
        <CartCard :item="item"></CartCard>
      </div>
    </div>
    -->
  </div>
</template>

<script>
import CartCard from "@/components/CartCard.vue";

export default {
  components: {
    CartCard,
  },
  computed: {
    cartItems: function () {
      return this.$store.state.scarpeNelCarrello;
    },
  },
};
</script>
