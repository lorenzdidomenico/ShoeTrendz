<template>
  <div>
    <h1>Scarpe</h1>
    <h2>Lista delle scarpe disponibili:</h2>
    <div class="row">
      <ShoeCard
        v-for="elem in shoes"
        :key="elem.id"
        :shoe="elem"
        class="col-md-6"
      ></ShoeCard>
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
  },
};
</script>
