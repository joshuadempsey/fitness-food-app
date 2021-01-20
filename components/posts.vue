<template>
  <div>
    <ul
      class="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-4 md:gap-8 mx-auto"
    >
      <li
        v-for="post in posts"
        v-bind:key="post.id"
        class="
      w-full bg-white shadow-sm rounded-sm flex flex-col post h-auto"
      >
        <div class="relative">
          <img
            :src="require(`~/assets/food-images/${post.image}`)"
            alt=""
            class="rounded-tl-lg rounded-tr-lg object-cover w-full h-80"
          />
          <div class="absolute top-0 left-0">
            <div class="flex flex-row w-auto">
              <img
                :src="require(`~/assets/user-images/${post.userImage}`)"
                class="h-14 w-14 object-cover rounded-full mt-2 ml-2 shadow-lg ring-1 ring-white"
                alt=""
              />
              <h1 class="self-center ml-2 text-white text-sm">
                {{ post.user }}
              </h1>
            </div>
          </div>
        </div>
        <div class="px-4 py-2 space-y-2">
          <div class="flex flex-row">
            <h2 class="font-mont text-lg font-gray-800">
              {{ post.description }}
            </h2>
          </div>
          <div class="flex flex-row justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000000"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  }
};
</script>
