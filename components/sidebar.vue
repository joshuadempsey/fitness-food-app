<template>
  <div>
    <div
      class="w-80 bg-gradient-to-br from-cyan-500 to-teal-500 flex flex-col rounded-lg"
      style="height: max-content;"
    >
      <div class="p-4 w-full space-y-2">
        <h1 class="font-oleo text-3xl text-white tracking-wider text-center">
          Fitness Food App
        </h1>
        <h2 class="font-mont text-white font-baseline">
          Inspiring each other to eat healthily and happily. Each and every day.
        </h2>
      </div>
      <div class="px-4 py-2">
        <form action="#" class="flex flex-col">
          <label for="search" class="font-mont text-white text-sm"
            >Search</label
          >
          <input
            type="text"
            class="rounded-full w-full px-4 p-2 focus:outline-none focus:ring text-white font-mont"
            style="background: rgba(255,255,255,0.5);"
          />
        </form>
      </div>
      <div class="px-4 py-2">
        <div class="flex flex-row space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffffff"
            class="self-center w-4 h-4 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <h3
            class="font-mont text-sm uppercase tracking-wide text-white font-medium py-2"
          >
            Trending in United Kingdom currently
          </h3>
        </div>
        <div class="flex flex-col space-y-1">
          <ul>
            <li
              v-for="(trend, index) in trends"
              :key="index"
              class="text-white font-mont tracking-wider"
            >
              <a href="#" class="hover:underline"> #{{ trend.name }},</a>
              {{ trend.number }} posts
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="w-80 bg-gradient-to-br from-cyan-500 to-teal-500 flex flex-col rounded-lg mt-4"
      style="height: max-content;"
    >
      <div class="p-4 flex flex-col">
        <h1 class="font-mont text-lg text-center text-white">Ruth Thomson</h1>
        <div class="mx-auto w-auto">
          <img
            src="~/assets/user-images/2.jpeg"
            class="h-14 w-14 object-cover rounded-full mt-2 ml-2 shadow-lg ring-1 ring-white mx-auto"
          />
        </div>
        <div class="w-full flex flex-row items-center text-center mt-4">
          <div class="w-1/3">
            <p class="text-white font-mont text-baseline">
              382 posts
            </p>
          </div>
          <div class="w-1/3">
            <p class="text-white font-mont text-baseline">323,098 calories</p>
          </div>
          <div class="w-1/3">
            <p class="text-white font-mont text-baseline">67 days 🔥</p>
          </div>
        </div>
        <div class="mt-4">
          <button
            class="bg-gradient-to-br from-pink-500 to-yellow-500 px-2 py-2 rounded-full w-full text-white text-center focus:outline-none focus:ring"
          >
            View full profile
          </button>
        </div>
      </div>
    </div>
    <div
      class="w-80 bg-gradient-to-br from-cyan-500 to-teal-500 flex flex-col rounded-lg mt-4"
      style="height: max-content;"
    >
      <div class="flex flex-row flex-wrap p-4">
        <ul class="text-xs text-gray-200">
          <li class="inline mr-1"><a href="#">About</a></li>
          <li class="inline mr-1"><a href="#">Help</a></li>
          <li class="inline mr-1"><a href="#">Press</a></li>
          <li class="inline mr-1"><a href="#">API</a></li>
          <li class="inline mr-1"><a href="#">Jobs</a></li>
          <li class="inline mr-1"><a href="#">Privacy</a></li>
          <li class="inline mr-1"><a href="#">Locations</a></li>
          <li class="inline mr-1"><a href="#">Top accounts</a></li>
          <li class="inline mr-1"><a href="#">Hashtag</a></li>
          <li class="inline mr-1"><a href="#">Language</a></li>
        </ul>
      </div>
      <div class="flex flex-col px-4 pb-4">
        <p class="text-xs text-mont text-gray-200">
          1,245,342,578 calories crunched by members.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    trends() {
      return this.$store.state.trends.trends;
    }
  }
};
</script>
