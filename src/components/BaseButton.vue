<template>
  <div>
    <button @click="addToCart">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart: function () {
      this.$store.commit("AGGIUNGI_CARRELLO");
    },
  },
};
</script>

<style lang="scss" scoped></style>
