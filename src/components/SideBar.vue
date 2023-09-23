<template>
  <div class="sidebar">
    <SideCard
      v-for="card in $store.state.cards"
      :cardData="card"
      :key="card.id"
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
  flex-direction: column; /* Imposta la direzione delle card in verticale */
  align-items: flex-end; /* Allinea le card completamente a destra */
}

/* Stili aggiuntivi per le card */
/* Aggiungi margini superiori o inferiori alle card per separarle */
.side-card {
  margin-bottom: 10px;
}
</style>
