<template>
  <div>
    <!-- Aggiungi FasciaOrizzontale nella tua vista -->
    <HorizontalBand titolo="CREA IL TUO STILE CON SHOETRENDZ:" sottotitolo="dove la moda incontra la comodità!"
      :testoPulsante="'Acquista'" />

    <!-- Includi il componente carosello qui -->
    <div class="carosello">
      <Carousel class="carousel" />
    </div>



    <!-- Aggiungi il componente GifComponent con l'URL della GIF come prop -->
    <div class="Gif-container">
      <GifCard :gifUrl="require('@/assets/Restock.gif')" />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/CarouselCard.vue"; // Assicurati che il percorso sia corretto
import HorizontalBand from "@/components/HorizontalBand.vue"; // Assicurati che il percorso sia corretto
import GifCard from "@/components/GifCard.vue"; // Assicurati che il percorso sia corretto


export default {
  components: {
    Carousel, // Utilizza lo stesso nome del componente importato
    HorizontalBand,
    GifCard
  }

};
</script>

<style>
.carosello {
  align-items: center;
  margin-top: 0;
  transition: margin-top 0.3s ease;
  padding: 20px;
  margin-left: 20%;

}

.carosello,
.horizontal-band {
  margin-top: 0;
  margin-left: 20%;
  /* Imposta il margine superiore desiderato per il contenuto */
  transition: margin-top 0.3s ease;
  /* Aggiungi una transizione per un effetto di scorrimento fluido */
}

/* Riduci il margine superiore del contenuto quando il menu è aperto */
.nav.navbar-expand-lg.show+.carosello,
.nav.navbar-expand-lg.show+.horizontal-band {
  margin-top:
    /* Altezza del menu quando è aperto */
    60px;
}

.Gif-container {
  display: flex;
  max-width: 100%;
  padding: 20px;
}

.Gif-container img {
  width: 100%;
}

/* Stili globali o specifici per questa vista */
</style>
