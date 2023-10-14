<template>
  <div class="totale">

    <HorizontalBand titolo="CREA IL TUO STILE CON ShoeTrendz:" sottotitolo="dove la moda incontra la comodità!"
      :testoPulsante="'Acquista'" :to="'/shoesList'" />

    <div class="carosello">
      <Carousel class="carousel" />
    </div>

    <div class="Column-text">
      <ColumnText :header1="'SHOETRENDZ: ARTICOLI SPORTIVI, STILE E STORIE DAL 1949'"
        :paragraph1="'Lo sport ci mantiene in forma. Nel corpo e nello spirito. Ci unisce. Ha il potere di cambiare la vita delle persone. Attraverso storie di atleti di successo, ispirazione e suggerimenti per l allenamento. Articoli sportivi dotati delle tecnologie più sofisticate per migliorare le tue performance.Migliora i tuoi record personali.adidas è la casa degli amanti di ogni sport, dal running al calcio.Per chi vuole fuggire dal caos della città e dedicarsi all hiking. Per l appassionata di yoga che vuole eseguire pose perfette.Le 3 Strisce sono protagoniste della scena musicale.Sul palcoscenico dei festival.In un negozio di articoli sportivi adidas trovi prodotti che ti permettono di mantenere la concentrazione fino al fischio finale.Durante una gara.Fino al traguardo.Siamo qui per sostenere ogni creator.Migliorare le loro performance, le loro vite, e cambiare il mondo.'"
        :header2="'ABBIGLIAMENTO SPORTIVO, PER OGNI ATTIVITÀ.'"
        :paragraph2="'Shoetrendz crea abbigliamento per la palestra per ogni tipo di atleta. Creator che vogliono cambiare il proprio sport. Sfidare le convenzioni. Infrangere le regole per scriverne di nuove. E poi infrangerle di nuovo. Forniamo a team e atleti i migliori prodotti per l allenamento.Per mantenere alta la concentrazione.Creiamo abbigliamento sportivo progettato per aiutarti a raggiungere il traguardo.E conquistare trofei.Il nostro store dedicato alle donne offre i migliori reggiseni e tight sportivi.Per ogni genere di attività.Creiamo, innoviamo e sperimentiamo.Mettiamo alla prova le nuove tecnologie sul campo.Negli stadi, sulle piste, in piscina.Ci ispiriamo ai nostri prodotti più iconici per creare lo streetwear del futuro.come ad esempio NMD o le nostre tracksuit Firebird.Modelli sportivi d archivio ritornano protagonisti. Come Stan Smith e Superstar. Icone dello streetstyle e non solo.'" />
    </div>

    <h1> Restock esclusivo: i migliori stili sono tornati. </h1>
    <h2>Acquista ora prima che finiscano di nuovo! </h2>
    <div class="Gif-container">
      <router-link :to='"/shoesList"'>
        <GifCard :gifUrl="require('@/assets/Restock.gif')" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/CarouselCard.vue"; // Assicurati che il percorso sia corretto
import HorizontalBand from "@/components/HorizontalBand.vue"; // Assicurati che il percorso sia corretto
import GifCard from "@/components/GifCard.vue"; // Assicurati che il percorso sia corretto
import ColumnText from '@/components/ColumnText.vue';


export default {
  components: {
    Carousel,
    HorizontalBand,
    GifCard,
    ColumnText
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
  transition: margin-top 0.3s ease;
}

.nav.navbar-expand-lg.show+.carosello,
.nav.navbar-expand-lg.show+.horizontal-band {
  margin-top:
    60px;
}

.Gif-container {
  display: flex;
  max-width: 100%;
  padding: 20px;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.Gif-container img {
  width: 100%;
}

h2,
h1 {
  font-weight: bold;
  text-align: center;
  font-size: 30px;
}

@media screen and (max-width: 992px) and (min-width: 768px) {
  .totale {
    margin-right: 50px;
  }
}
</style>
