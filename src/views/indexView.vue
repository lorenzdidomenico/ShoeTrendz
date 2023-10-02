<template>
  <div>
    <h4 style="padding-bottom:20px">Homepage</h4>

    <!-- Includi il componente carosello qui -->
    <Carousel />
  </div>
</template>

<script>
import Carousel from "@/components/CarouselCard.vue"; // Assicurati che il percorso sia corretto

export default {
  components: {
    Carousel, // Utilizza lo stesso nome del componente importato
  },
};
</script>

<style>
/* Stili globali o specifici per questa vista */
</style>
