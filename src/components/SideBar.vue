<template>
  <div class="sidebar">
    <SideCard
      v-for="card in $store.state.cards"
      :cardData="card"
      :key="card.id"
      class="custom-card"
    ></SideCard>
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
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.custom-card {
  width: 100%;
  margin-bottom: 10px;
}

@media screen and (max-width: 992px) {
  .sidebar {
    display: none; /* Nascondi la barra laterale sotto i 992px */
  }
}

</style>
