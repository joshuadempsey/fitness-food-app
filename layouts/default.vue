<template>
  <div class="min-h-screen w-full mb-20 md:mb-0">
    <navigation></navigation>
    <div class="container mx-auto mt-10 px-6">
      <div class="mx-auto">
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-full md:w-auto md:flex md:flex-1 overflow-hidden">
            <posts
              class="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 md:gap-8 mt-3"
            ></posts>
          </div>

          <div
            class="w-80 overflow-hidden hidden xl:flex ml-10 mt-3 xl:flex-row"
          >
            <sidebar></sidebar>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full h-auto my-8 justify-center items-center">
        <h1 class="text-baseline text-gray-900 font-mont">
          You've reached the bottom of your feed. To find more posts, you can
          visit the explore tab or you can follow more users.
        </h1>
        <div class="my-3">
          <button
            class="bg-gradient-to-r from-teal-500 to-cyan-500 px-3 py-2 text-white font-mont rounded-full focus:outline-none focus:ring"
          >
            Find more users to follow
          </button>
        </div>
        <div class="my-3">
          <button
            class="bg-gradient-to-r from-teal-500 to-cyan-500 px-3 py-2 text-white font-mont rounded-full focus:outline-none focus:ring"
          >
            Explore
          </button>
        </div>
        <div>
          <h4
            class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500 font-oleo text-3xl tracking-widest text-center"
          >
            Thanks, Fitness Food App
          </h4>
        </div>
      </div>
    </div>
    <appfooter></appfooter>
  </div>
</template>
<script>
// <!--<template>
//   <div class="bg-gray-100 min-h-screen w-full mb-20 md:mb-0">
//     <navigation></navigation>

//     <!-- Container to hold the main news feed of posts for the user -->
//     <div class="container px-4 mx-auto flex flex-row flex-wrap mt-10">
//       <posts class="container w-full md:w-2/3"></posts>
//       <sidebar>sdf</sidebar>
//     </div>

//     <!-- Footer, fixed on mobile and relative on desktop -->
//     <appfooter></appfooter>
//     <!-- end of footer -->
//   </div>
// </template>
// -->
</script>
