<template>
    <div class="text-white hamburger">
        <div class="mx-6 mt-4">
            <ul>
                <li v-for="link in links" :key="link" class="flex items-center justify-between mb-4 text-xl capitalize">{{link}} <i class="fa fa-chevron-down" aria-hidden="true"></i></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: ["at the box", "on demand", "free live TV", "deals", "more", "find a box"]
        }
    }
}
</script>

<style>
.hamburger {
    position: absolute;
    left: 0;
    right: 0;
    top: 3rem;
    z-index: 100;
    width: 100%;
    height: auto;
    background: #1e1123;
    opacity: .98;
}
</style>
