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
