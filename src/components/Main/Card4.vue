<template>
    <div id="card4" class="flex justify-between w-full">
        <img :src="images.images[0]" alt="" />
        <img :src="images.images[1]" alt="" />
        <img :src="images.images[2]" alt="" />
        <img :src="images.images[3]" alt="" />
    </div>
</template>

<script>
export default {
    props: ["images"],
}
</script>

<style lang="scss">
#card4 {
    height: 160px;
    width: 100%;
    overflow-x: scroll;

    img {
        max-width: 285px;
        max-height: 160px;
        margin-right: 1rem;
        @include xl {
            margin-right: 0;
        }
    }
}
</style>
