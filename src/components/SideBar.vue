<template>
  <div class="container">
    <div class="col-12 col-md-6 col-lg-4" v-for="card in $store.state.cards" :key="card.id">
      <div class="custom-card">
        <SideCard :cardData="card"></SideCard>
      </div>
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
</style>
