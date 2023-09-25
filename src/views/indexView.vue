<template>
  <div>
    <h1 style="text-align: center">SHOETRENDZ.COM</h1>

    <!-- Inserisci il componente carosello qui -->
    <Carousel />
  </div>
</template>

<script>
import Carousel from "@/components/CarouselCard.vue";

export default {
  components: {
    Carousel, // Utilizza lo stesso nome del componente importato
  },
  // Altri dati o metodi specifici alla vista
};
</script>
