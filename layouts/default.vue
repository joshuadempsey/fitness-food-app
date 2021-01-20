<template>
  <div class="min-h-screen w-full bg-gray-100">
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
    </div>
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
