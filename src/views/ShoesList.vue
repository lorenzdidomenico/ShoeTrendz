<template>
  <div class="totale">
    <h1>Scarpe</h1>
    <h2>Modelli disponibili: {{ numeroScarpe }} </h2>
    <div class="row">
      <ShoeCard v-for="elem in shoes" :key="elem.id" :shoe="elem" class="col-md-6"></ShoeCard>
    </div>
  </div>
</template>

<script>
import ShoeCard from "@/components/ShoesCard.vue";

export default {
  components: {
    ShoeCard,
  },
  computed: {
    shoes: function () {
      return this.$store.state.shoes;
    },

    numeroScarpe: function () {
      return this.$store.getters.numeroScarpe;
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  text-align: left;
}

@media screen and (max-width: 992px) and (min-width: 768px) {
  .totale {
    margin-right: 50px;
  }
}
</style> 