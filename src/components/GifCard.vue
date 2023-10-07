<template>
    <div>
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
