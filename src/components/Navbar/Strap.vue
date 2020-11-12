<template>
    <div class="flex items-center text-sm whitespace-no-wrap strap">
        <div class="flex w-full border-black text-strap">
            <div class="mr-3 ">
                Redbox United Against Racism.
            </div>
            <button class="font-semibold uppercase">learn more</button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.strap {
    height: 40px;
    font-size: .89rem;
    @include md {
        height: 51px;
        font-size: 1rem;
    }
    @include xl {
        /* padding: 0 7.25rem; */
    }
    background: white;
    border-left: 4px solid#0ba5f8;
    .text-strap {
        padding: 0 .35rem;
        max-width: 1223px;
        margin: 0 auto;
        @include md {
            padding-left: 1rem;
        }
        @include xl {
            padding: 0;
        }
        @include fourk {
            min-width: 1460px;
        }
    }
    button {
        font-size: .87rem;
        @include md {
            font-size: 1rem;
        }
    }
}
</style>
