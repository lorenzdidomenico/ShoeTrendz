<template>
  <div>
    <h4 style="padding-bottom:20px">Homepage</h4>

    <!-- Includi il componente carosello qui -->
    <div class="carosello">
      <Carousel class="carousel" />
    </div>

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
.carosello {
  align-items: center;
  margin-top: 0;
  transition: margin-top 0.3s ease;
}

.carosello,
.horizontal-band {
  margin-top: 0;
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

/* Stili globali o specifici per questa vista */
</style>
