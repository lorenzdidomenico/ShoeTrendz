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
            default: 'Clicca Qui', // Testo predefinito per il pulsante
        },
    },
    methods: {
        handleClick() {
            // Logica da eseguire quando il pulsante viene cliccato
            console.log('Pulsante cliccato!');
        },
    },
};
</script>

<style scoped>
.fascia-orizzontale {
    background-color: #da3319;
    /* Colore di sfondo della fascia orizzontale (blu in questo caso) */
    color: #fff;
    /* Colore del testo (bianco in questo caso) */
    padding: 20px;
    /* Spaziatura interna della fascia orizzontale */
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
    /* Colore di sfondo del pulsante (verde in questo caso) */
    color: #000000;
    /* Colore del testo del pulsante (bianco in questo caso) */
    border: none;
    /* Rimuovi il bordo del pulsante */
    border-radius: 20px;
    /* Bordo arrotondato del pulsante */
}
</style>
