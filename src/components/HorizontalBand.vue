<template>
    <div class="fascia-orizzontale">
        <h2 class="titolo">{{ titolo }}</h2>
        <h3 class="sottotitolo">{{ sottotitolo }}</h3>
        <button @click="handleClick" class="pulsante">{{ testoPulsante }}</button>
    </div>
</template>

<script>
export default {
    props: {
        titolo: {
            type: String,
            required: true,
        },
        sottotitolo: {
            type: String,
            required: true,
        },
        testoPulsante: {
            type: String,
            default: 'Clicca Qui',
        },
    },
    methods: {
        handleClick() {
            this.$router.push('/shoesList'); //reindirizzamento
        },
    },
};
</script>

<style scoped>
.fascia-orizzontale {
    background-color: #da3319;
    color: #fff;
    padding: 20px;
    text-align: center;
    margin-top: 5px;
}

.titolo {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 10px;
}

.sottotitolo {

    font-size: 20px;
    margin-bottom: 10px;
}

.pulsante {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
    border: 3px solid white;
    border-radius: 25px;

}

.pulsante:hover {
    color: #ffffff;
    background-color: rgb(220, 150, 10);
    border: 3px solid white;
    font-size: bold;
}
</style>
