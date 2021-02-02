<template>
  <div>
    <footer class="hidden md:flex bg-gray-900 w-full h-auto">
      <div class="p-4 w-full">
        <p class="font-mont text-white lg:text-center">
          This was made to showcase my HTML/CSS skills and was built with Nuxt
          JS. It's fully responsive. If there's any questions please ask or
          email me at josh@joshdempsey.co.uk. Thanks for looking
        </p>
      </div>
    </footer>
    <footer
      class="fixed md:hidden h-14 bg-white w-full bottom-0 left-0 z-50 shadow-lg border-t border-gray-200"
    >
      <div
        class="grid grid-cols-5 divide-x divide-gray-200 divide-width-1 h-full"
      >
        <div class="flex flex-row h-full w-full justify-center items-center">
          <img
            src="~/assets/user-images/2.jpeg"
            class="h-12 w-12 object-cover rounded-full shadow-lg ring-1 ring-cyan-500 mx-auto"
          />
        </div>
        <div class="flex flex-row h-full w-full justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#0DB7BC"
            class="w-8 h-8 self-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </div>
        <div class="flex flex-row h-full w-full justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0DB7BC"
            class="w-8 h-8 self-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div class="flex flex-row h-full w-full justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#0DB7BC"
            class="w-8 h-8 self-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <div class="flex flex-row h-full w-full justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#0DB7BC"
            class="w-8 h-8 self-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </div>
    </footer>
  </div>
</template>
