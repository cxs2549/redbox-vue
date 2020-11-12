<template>
    <section id="main" class="">
        <cards :title="cards[0].title" :images="cards[0]" />
        <cards :title="cards[1].title" :images="cards[1]" />
        <cards :title="cards[2].title" :images4="cards[2]" />
        <img class="banner" src="../../assets/images/banner-1.jpg" alt="" />
        <cards :title="cards[3].title" :images="cards[0]" />
        <img class="banner" src="../../assets/images/banner-2.jpg" alt="" />
        <cards :title="cards[4].title" :images="cards[1]" />
        <cards :title="cards[5].title" :images="cards[0]" />
        <img class="banner" src="../../assets/images/banner-3.jpg" alt="" />
        <cards :title="cards[6].title" :images="cards[1]" />
        <cards :title="cards[7].title" :images="cards[0]" />
        <cards :title="cards[8].title" :images="cards[1]" />
       <TriLinks />
       <Filters />
    </section>
</template>

<script>
import Cards from "./Cards"
import TriLinks from './TriLinks'
import Filters from './Filters'
export default {
    components: { Cards, TriLinks, Filters },
    computed: {
        cards() {
            return this.$store.state.cards
        },
    },
    
}
</script>

<style lang="scss">
#main {
    /* height: 100%; */
    max-width: 1400px;
    margin: 0 auto;
    background: black;
    .banner {
        margin: 5rem 7.5rem 2rem 7.5rem;
        display: none;
    }
    
 
}
</style>
