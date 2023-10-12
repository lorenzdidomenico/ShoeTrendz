<template>
  <div class="container">
    <div class="sidebar">
      <SideCard class="custom-card" v-for="card in $store.state.cards" :cardData="card" :key="card.id"></SideCard>
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

.sidebar{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.custom-card {
  width: 100%;
  margin-bottom: 10px;
}

@media screen and (max-width: 992px) {
  .sidebar{
    display: none;
  }
}
</style>
