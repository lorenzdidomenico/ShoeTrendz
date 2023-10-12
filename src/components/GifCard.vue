<template>
    <div>

        <img :src="gifUrl" alt="GIF animata" />

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
