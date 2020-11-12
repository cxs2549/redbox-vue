<template>
    <div id="cards" class="">
        <div class="flex items-center justify-between pt-8 pb-1 text-white title">
            <div class="text-xl md:text-2xl">{{ title }}</div>
            <div class="text-xs uppercase seeMore"><span class="mr-1">See more </span><i class=" fa fa-chevron-right" aria-hidden="true"></i></div>
        </div>
        <card :images="images" />
        <card4 :images="images4" />
    </div>
</template>

<script>
import Card from './Card'
import Card4 from './Card4'
export default {
    props: ["title", "images", "images4"],
    components: {Card, Card4}
}
</script>

<style lang="scss">
#cards {
    margin: 0 1rem;
    height: auto;
    margin-bottom: 2rem;
    @include xl {
    margin: 0 7rem;
        
    }
    .title {
        font-family: "Zilla Slab";
    }
    .seeMore {
        font-family: Montserrat;
    }
}
</style>
