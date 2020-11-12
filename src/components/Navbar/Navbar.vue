<template>
    <nav class="navbar">
        <row1 />
        <row2 />
    </nav>
</template>

<script>
import Row1 from "./Row1"
import Row2 from "./Row2"
export default {
    components: { Row1, Row2 },
}
</script>

<style lang="scss">
.navbar {
    height: auto;
    z-index: 100;
    background: linear-gradient(310deg, #42378f 20%, #f53844 99%);
    display: grid;
    grid-gap: 0.75rem;
    grid-template-rows: 56px 40px;
    @include md {
        grid-template-rows: 59px 40px;
    }
    @include lg {
        grid-template-rows: 58px 50px;
    }
}
</style>
