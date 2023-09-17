<template>
  <div>
    <h1>{{ shoe.brand }} - {{ shoe.product }}</h1>
    <img v-bind:src="shoe.image_url" alt="Immagine delle scarpe" />

    {{ shoe.description }} <br />

    <ul>
      <li v-for="feature in shoe.features" :key="feature">
        {{ feature }}
      </li>
    </ul>

    Per maggiori dettagli,
    <a v-bind:href="shoe.external_url" target="_blank">visita il sito</a>!

    <p v-if="shoe.inventory > 10">Disponibile</p>
    <p v-else-if="shoe.inventory > 0">
      In esaurimento, solo più {{ shoe.inventory }} pezzi disponibili
    </p>
    <p v-else>Non disponibile</p>
    <p v-show="shoe.onSale">In vendita!</p>
    <div>
      <BaseButton :shoe="shoe">Compra ora a {{ shoe.price }} euro</BaseButton>
    </div>
    <p>
      <router-link v-bind:to="{ name: 'shoes-list' }"
        >Torna alla lista</router-link
      >
    </p>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  props: ["id"],
  components: { BaseButton }, // Aggiunto il componente BaseButton
  data: function () {
    return {
      shoe: {},
    };
  },
  created: function () {
    this.shoe = this.$store.getters.getShoeById(Number(this.id));
    //this.shoe = this.$store.state.shoes[Number(this.id)];
    if (!this.shoe) console.log("SCARPA NON ESISTE");
  },
};
</script>
