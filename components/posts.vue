<template>
  <div>
    <div
      v-for="post in posts"
      v-bind:key="post.id"
      class="
      w-full bg-white shadow-sm rounded-sm flex flex-col post h-auto relative"
    >
      <div class="absolute right-0 top-0 -mt-2 z-50 flex flex-row">
        <div v-for="(type, index) in post.type" :key="index">
          <div
            class="bg-gradient-to-r from-teal-500 to-cyan-500 shadow-sm rounded-full px-2 py-1 mr-1 flex flex-row"
          >
            <span class="text-xs text-white self-center">{{ type.title }}</span>
          </div>
        </div>
      </div>
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
            <h1 class="self-center ml-2 text-white text-sm font-mont">
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
          <div class="flex flex-row space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#C5382E"
              viewBox="0 0 24 24"
              stroke="#C5382E"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{{ Math.floor(Math.random() * 135) + 10 }}</span>
          </div>
        </div>
      </div>
    </div>
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
