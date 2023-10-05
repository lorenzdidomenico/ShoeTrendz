<template>
  <div>
    <h4 style="padding-bottom:20px">Homepage</h4>

    <!-- Includi il componente carosello qui -->
    <Carousel />

    <!-- Aggiungi FasciaOrizzontale nella tua vista -->
    <HorizontalBand titolo="CREA IL TUO STILE CON SHOETRENDZ:" sottotitolo="dove la moda incontra la comodità!"
      :testoPulsante="'Acquista'" />

  </div>
</template>

<script>
import Carousel from "@/components/CarouselCard.vue"; // Assicurati che il percorso sia corretto
import HorizontalBand from "@/components/HorizontalBand.vue"; // Assicurati che il percorso sia corretto

export default {
  components: {
    Carousel, // Utilizza lo stesso nome del componente importato
    HorizontalBand,
  }

};
</script>

<style>
/* Stili globali o specifici per questa vista */
</style>
