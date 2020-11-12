<template>
    <div id="card" class="flex justify-between w-full">
        <img :src="images.images[0]" alt="" />
        <img :src="images.images[1]" alt="" />
        <img :src="images.images[2]" alt="" />
        <img :src="images.images[3]" alt="" />
        <img :src="images.images[4]" alt="" />
        <img :src="images.images[5]" alt="" />
        <img :src="images.images[6]" alt="" />
    </div>
</template>

<script>
export default {
    props: ["images"],
}
</script>

<style lang="scss">
#card {
    height: 235px;
    width: 100%;
    overflow-x: scroll;

    img {
        max-width: 100%;
        max-height: 100%;
        margin-right: 1rem;
         @include xl {
            margin-right: 0;
        }
    }
}
</style>
