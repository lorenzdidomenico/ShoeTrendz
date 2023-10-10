<template>
  <div>
    <div class="shoe-card -shadow">
      <router-link class="shoe-link" v-bind:to="{ name: 'shoes-details', params: { id: shoe.id } }">
        <img v-bind:src="shoe.image_url" alt="Immagine delle scarpe" class="img-fluid" />
        <h4 class="title">{{ shoe.product }}</h4>
        <p v-if="shoe.inventory >= 10">Disponibile</p>
        <p v-else-if="shoe.inventory < 10 && shoe.inventory >= 1">
          In esaurimento
        </p>
        <p v-else style="color: red">Non disponibile</p>
        <p v-show="shoe.onSale">In vendita!</p>
        <span class="shoe-price">{{ shoe.price }} euro</span>
      </router-link>
      <BaseButton :shoe="shoe">Compra ora a {{ shoe.price }} euro</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
  props: ["shoe"],
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.shoe-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  background-color: #FFFFFC;
}

.shoe-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.shoe-card>.title {
  margin: 0;
}

.shoe-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

.shoe-card img {
  max-width: 100%;
  height: auto;
}

/* Stile per dispositivi mobili */
@media (max-width: 768px) {
  .shoe-card {
    padding: 10px;
  }

  .shoe-card .title {
    font-size: 18px;
  }

  /* Aggiungi altre modifiche necessarie per dispositivi mobili */
}

@media (min-width: 768px) and (max-width: 1024px) {
  .shoe-card {
    padding: 15px;
    width: 100%;
    /* Due card per riga su tablet */
    box-sizing: border-box;
    /* Assicura che il padding non aumenti la larghezza effettiva */
  }

  /* Regola la larghezza delle card in base alle dimensioni del tablet */
  @media (min-width: 769px) and (max-width: 1024px) {
    .shoe-card {
      width: 100%;

      /* Tre card per riga su tablet */
    }
  }

  /* Altre regole per ottimizzare il layout su tablet */
}

/* Stile per tablet */
/* Stile per tablet */

/* Regola la larghezza delle card in base alle dimensioni del tablet */



/* Aggiungi stili per desktop o altre dimensioni dello schermo */
</style>
