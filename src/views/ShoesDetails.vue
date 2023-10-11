<template>
  <div class="dettagli">
    <h1>{{ shoe.brand }} - {{ shoe.product }}</h1>
    <img v-bind:src="shoe.image_url" alt="Immagine delle scarpe" /> <br />

    {{ shoe.description }} <br />

    <ul>
      <li v-for="feature in shoe.features" :key="feature">
        {{ feature }}
      </li>
    </ul>

    Per maggiori dettagli,
    <a v-bind:href="shoe.external_url" target="_blank">visita il sito</a>!

    <p v-if="shoe.inventory >= 10">
      Disponibile <br />
      In vendita!
    </p>
    <p v-else-if="shoe.inventory < 10 && shoe.inventory >= 1">
      In esaurimento <br />
      In vendita!
    </p>
    <p v-else style="color: red">Non disponibile</p>
    <div>
      <BaseButton :shoe="shoe">Compra ora a {{ shoe.price }} euro</BaseButton>
    </div>
    <br />
    <p>
      <router-link v-bind:to="{ name: 'shoes-list' }">Torna alla lista</router-link>
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

<style>
.dettagli img {
  border-style: none;
  width: 50%;
  display: block;
}
</style>