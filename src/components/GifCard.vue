<template>
    <div>
        <h1> Restock esclusivo: i migliori stili sono tornati. </h1>
        <h2>Acquista ora prima che finiscano di nuovo! </h2>
        <router-link to="/">
            <img :src="gifUrl" alt="GIF animata" />
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'GifCard',
    props: {
        gifUrl: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
h2,
h1 {
    font-weight: bold;
    text-align: center;
    font-size: 30px;
}

/* Stili specifici per questo componente, se necessario */
</style>
