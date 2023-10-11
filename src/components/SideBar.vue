<template>
  <div class="container">
    <div class="col-12 col-md-6 col-lg-4" v-for="card in $store.state.cards" :key="card.id">
      <SideCard :cardData="card" class="custom-card"></SideCard>
    </div>
  </div>
</template>

<script>
import SideCard from "@/components/SideCard.vue";

export default {
  components: {
    SideCard,
  },
};
</script>

<style scoped>
.custom-card {
  width: 100%;
  margin-bottom: 10px;
}

@media screen and (max-width: 767px) {
  .custom-card {
    /* Modifica il layout delle carte quando lo schermo è inferiore a 768px */
    width: 100%;
  }
}
</style>
