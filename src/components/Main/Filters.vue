<template>
    <section id="filters" class="pb-8">
        <div class="flex justify-center font-semibold text-white">
            <div class="w-64 pb-2 text-center uppercase border-b-4 border-red-700 xl:w-56">movies</div>
            <div class="w-64 text-center uppercase border-b-4 border-gray-400">tv</div>
        </div>
        <button class="mt-10 xl:mx-16">
          <div class="flex flex-wrap pl-3 xl:justify-center">
            <div v-for="pill in pills" :key="pill" class="w-auto px-3 py-2 mb-5 mr-5 text-sm font-bold text-white uppercase rounded-full pill">{{pill}}</div>
          </div>
        </button>
    </section>
</template>

<script>
export default {
  data() {
    return {
      pills: ["action", "adventure", "animated", "comedy", "drama", "family", "horror", "kids", "romance", "sci-fi & fantasy", "seasonal", "special interest", "thriller & suspense"]
    }
  }
}
</script>

<style lang='scss'>
#filters {
    height: auto;
    margin: 1rem;
    @include xl {
    margin: 0 7.5rem;
    }
    .pill {
      background: #383539;
    }
}
</style>
