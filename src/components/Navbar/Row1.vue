<template>
    <div class="items-center nav-row1">
        <hamburger v-show="showMenu" />
        <div
            @click="showMenu = !showMenu"
            class="flex items-center mr-0 text-xl text-white bars xl:hidden"
        >
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>

        <div class="flex items-center mr-auto xl:mx-0 logo-section">
            <img class="w-32 mb-3 xl:w-40 xl:mb-0 logo" src="../../assets/images/logo.png" alt="" />
        </div>

        <div class="content">
            <div class="search">
                <input
                    type="text"
                    class="text-lg search__input"
                    aria-label="search"
                    placeholder="Search Redbox"
                />
                <button class="search__submit" aria-label="submit search">
                    <svg-icon icon="search" class="searchIcon" />
                </button>
            </div>
        </div>

        <div class="hidden ml-auto signup-section xl:inline">
            <ul class="flex items-center text-lg font-semibold text-white">
                <li>Sign In</li>
                <span class="mx-4 cursor-text">|</span>
                <li>Sign Up</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Hamburger from "./Hamburger"
export default {
    components: { Hamburger },
    data() {
        return {
            showMenu: false,
        }
    },
}
</script>

<style lang="scss">
.nav-row1 {
    display: grid;
    padding: 0 1rem;
    grid-template-columns: 30px 1fr auto;
    grid-template-areas: "bars logo search";
    @include tablet {
        grid-template-columns: 30px 1fr auto;
    }
    @include xl {
        padding: 0;
        max-width: 1220px;
        margin: 0 auto;
        grid-template-columns: 3.25fr 1fr 1fr;
        grid-template-areas: "logo search sign";
    }
    @include fourk {
        padding: 0;
        max-width: 1460px;
        margin: 0 auto;
    }
    .bars {
        grid-area: bars;
        width: 1rem;
    }
    .logo-section {
        grid-area: logo;
    }
    .search-section {
        grid-area: search;
    }
    .signup-section {
        grid-area: sign;
    }
    .logo {
        opacity: 0.95;
    }
}

.content {
    position: relative;
    width: 50vw;
    @include sm {
        width: 25vw;
    }
}
.search {
    grid-area: search;
    --size: 36px;
    margin-bottom: 0.5rem;
    border: 1px solid white;
    display: flex;
    border-radius: 100px;
    overflow: hidden;
    font-size: 1.25em;
    position: relative;
    width: var(--size);
    height: var(--size);
    margin-left: auto;
    transition: width 450ms ease;
    padding: 3px;
    align-items: center;
    @include tablet {
        width: 100%;
        margin-bottom: 0;
    }
}
.search__input {
    border: 0;
    padding-left: 0.5em;
    flex-grow: 1;
    outline: 0;
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: transparent;
    color: white;
    cursor: pointer;
    @include tablet {
        opacity: 1;
    }
}
.search__submit {
    font-size: 1.5rem;
    margin-left: auto;
    background: 0;
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    transition: background 200ms ease-out;
    width: calc(var(--size) - 10px);
    height: calc(var(--size) - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3px;
}

.search:focus-within {
    width: 100%;

    .search__input {
        opacity: 1;
        z-index: initial;
        cursor: initial;
        width: calc(100% - var(--size));
        background: transparent;
    }

    .search__submit {
        color: white;

        &:hover,
        &:focus {
            outline: 0;
        }
    }
}
</style>
