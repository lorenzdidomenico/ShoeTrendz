<template>
  <div class="card mb-2" style="width: 12rem">
    <img :src="cardData.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ cardData.title }}</h5>
      <p class="card-text">
        {{ cardData.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
};
</script>
