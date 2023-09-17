<template>
  <div>
    <h1>Lista delle scarpe</h1>
    <ShoeCard v-for="elem in shoes" :key="elem.id" :shoe="elem"></ShoeCard>
  </div>
</template>

<script>
import ShoeCard from "@/components/ShoesCard.vue";

export default {
  components: {
    ShoeCard,
  },
  data: function () {
    return {};
  },
  methods: {},
  computed: {
    shoes: function () {
      return this.$store.state.shoes;
    },
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
