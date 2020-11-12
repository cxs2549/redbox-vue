<template>
    <div class="flex flex-col items-center xl:flex-row tri-links">
        <div
            v-for="link in links"
            :key="link"
            class="flex items-center justify-between w-full px-4 text-white border cursor-pointer xl:w-4/12 box"
        >
            <div>
                <div class="text-xl font-semibold capitalize xl:text-2xl ">{{ link.title }}</div>
                <div class="mb-1">{{ link.caption }}</div>
            </div>
            <div class="text-4xl">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { title: "forensic files ", caption: "Watch Now on Free Live TV" },
                { title: "own your favorites", caption: "Starting at $3.99" },
                { title: "rent", caption: "Starting at $2" },
            ],
        }
    },
}
</script>

<style lang="scss">
.tri-links {
    margin: 4rem 1rem;
    @include xl {
        margin: 4rem 7.5rem;
    }
    .box {
        height: 70px;
        margin-bottom: 1rem;
        @include xl {
            height: 85px;
            margin-bottom: 0;
        }
        &:first-child,
        &:nth-child(2) {
            @include xl {
                margin-right: 2rem;
            }
        }
    }
}
</style>
