<template>
    <div class="hero">
        <vue-flux
            :options="vfOptions"
            :images="vfImagesS"
            :transitions="vfTransitions"
            ref="slider"
            style="height: 250px;"
            class="vue-flux sm:hidden"
        >
            <template v-slot:pagination>
                <flux-pagination class="absolute w-8/12 opacity-75 dots" />
            </template>
        </vue-flux>

        <vue-flux
            :options="vfOptions"
            :images="vfImagesM"
            :transitions="vfTransitions"
            ref="slider"
            style="height: 380px;"
            class="hidden sm:block lg:hidden vue-flux"
        >
            <template v-slot:pagination>
                <flux-pagination class="absolute bottom-0 w-8/12 opacity-75 dots" />
            </template>
        </vue-flux>

        <vue-flux
            :options="vfOptions"
            :images="vfImages"
            :transitions="vfTransitions"
            ref="slider"
            style="height: 380px; max-width: 1460px; margin: 0 auto;"
            class="hidden vue-flux lg:block"
        >
            <template v-slot:pagination>
                <flux-pagination class="absolute bottom-0 w-8/12 opacity-75 dots" />
            </template>
        </vue-flux>
    </div>
</template>

<script>
const URL1 = require("../../assets/images/hero-1-1440x380.jpg")
const URL2 = require("../../assets/images/hero-2-1440x380.jpg")
const URL3 = require("../../assets/images/hero-3-1440x380.jpg")
const URL4 = require("../../assets/images/hero-1-M.jpg")
const URL5 = require("../../assets/images/hero-2-M.jpg")
const URL6 = require("../../assets/images/hero-3-M.jpg")
const URL7 = require("../../assets/images/hero-1-S.jpg")
const URL8 = require("../../assets/images/hero-2-S.jpg")
const URL9 = require("../../assets/images/hero-3-S.jpg")
import { VueFlux, FluxPagination } from "vue-flux"

export default {
    components: {
        VueFlux,
        FluxPagination,
    },

    data: () => ({
        vfOptions: {
            autoplay: true,
        },
        vfImages: [URL1, URL2, URL3],
        vfImagesM: [URL4, URL5, URL6],
        vfImagesS: [URL7, URL8, URL9],
        vfTransitions: ["fade"],
    }),
}
</script>

<style lang="scss">
.hero {
    min-height: auto;
    width: 100vw;
    z-index: -100;

    @include xl {
        max-height: 380px;
        min-height: 380px;
    }
    .dots {
        /* top: 5rem; */
        bottom: -2rem;
        left: 50%;
        transform: translateX(-50%);
        @include md {
            bottom: -3.5rem;
        }
    }
    .vue-flux {
        width: 100vw;
        z-index: -100;
    }
}
</style>
