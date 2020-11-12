<template>
    <div class="items-center mb-2 nav-row2">
        <div class=" signup-section2 xl:hidden">
            <ul class="flex items-center text-lg font-semibold text-white">
                <li>Sign In</li>
                <span class="mx-4 cursor-text">|</span>
                <li>Sign Up</li>
            </ul>
        </div>

        <ul class="items-center hidden text-lg text-white capitalize links xl:flex">
            <li @mouseover="onOver('drop1')" @mouseleave="onLeave('drop1')" class="relative">
                <div>at the box</div>
                <div class="absolute hidden px-4 text-sm sub" id="drop1">
                    <ul>
                        <li class="capitalize" v-for="list in lists[0]" :key="list">{{ list }}</li>
                    </ul>
                </div>
            </li>
            <li @mouseover="onOver('drop2')" @mouseleave="onLeave('drop2')" class="relative">
                <div>on demand</div>
                <div class="absolute hidden px-4 text-sm sub2" id="drop2">
                    <ul>
                        <li class="capitalize" v-for="list in lists[1]" :key="list">{{ list }}</li>
                    </ul>
                </div>
            </li>
            <li @mouseover="onOver('drop3')" @mouseleave="onLeave('drop3')" class="relative">
                <div>free live TV</div>
                <div class="absolute hidden px-4 text-sm sub2" id="drop3">
                    <ul>
                        <li class="capitalize" v-for="list in lists[2]" :key="list">{{ list }}</li>
                    </ul>
                </div>
            </li>
            <li @mouseover="onOver('drop4')" @mouseleave="onLeave('drop4')" class="relative">
                <div>deals</div>
                <div class="absolute hidden px-4 text-sm sub4" id="drop4">
                    <ul>
                        <li class="capitalize" v-for="list in lists[3]" :key="list">{{ list }}</li>
                    </ul>
                </div>
            </li>
            <li @mouseover="onOver('drop5')" @mouseleave="onLeave('drop5')" class="relative">
                <div>more</div>
                <div class="absolute hidden px-4 text-sm sub4" id="drop5">
                    <ul>
                        <li class="capitalize" v-for="list in lists[4]" :key="list">{{ list }}</li>
                    </ul>
                </div>
            </li>
        </ul>

        <div class="flex items-center justify-end text-lg font-semibold text-white capitalize find">
            <div class="hidden mr-2 xl:inline"><i class=" fas fa-map-marker-alt"></i></div>
            <div class="hidden mr-6 cursor-pointer xl:inline">find a box</div>
        </div>

        <div class="flex justify-end text-xl text-white bag">
            <i class="fa fa-shopping-bag " aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: [
                ["new", "movies to rent", "movies to own", "genres", "collections", "coming soon"],
                ["featured", "new", "genres", "coming soon", "what is on demand"],
                ["on now", "what is free live TV"],
                ["our top deals", "at the box deals", "on demand deals"],
                ["redbox perks", "redbox unscripted", "gift cards"],
            ],
        }
    },
    methods: {
        onOver(id) {
            const dropdown = document.getElementById(id)
            dropdown.classList.add("visible")
            dropdown.classList.remove("hidden")
        },
        onLeave(id) {
            const dropdown = document.getElementById(id)
            dropdown.classList.add("hidden")
            dropdown.classList.remove("visible")
        },
    },
}
</script>

<style lang="scss">
.nav-row2 {
    z-index: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "sign bag";
    opacity: 0.95;
    max-width: 100vw;
    justify-content: space-between;
    padding: 0 1rem;
    @include xl {
        margin: 0 auto;
        min-width: 1220px;
        padding: 0;
        grid-template-columns: 2fr 1fr;
        grid-template-areas: "links bag";
    }
    @include fourk {
        padding: 0;
        min-width: 1460px;
        margin: 0 auto;
    }
    .bag {
        grid-area: bag;
    }
    .signup-section2 {
        grid-area: sign;
        height: 100%;
    }
    li {
        @include xl {
            margin-right: 3.5rem;
        }
        white-space: nowrap;
    }
    .links {
        grid-area: links;
        font-weight: 500;
    }
    .find {
        grid-area: bag;
        margin-right: 2rem;
    }
    .sub {
        top: 2.4rem;
        width: 160%;
        background: rgba(12, 9, 9, 0.9);
        padding: 1rem 1.5rem 0 1.5rem;
        z-index: 100;
        height: auto;
        li {
            margin-bottom: 1rem;
        }
    }
    .sub2 {
        @extend .sub;
        width: 180%;
    }
    .sub4 {
        @extend .sub;
        width: 190px;
    }
}
</style>
