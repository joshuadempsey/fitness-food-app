<template>
  <header>
    <nav
      class="bg-gradient-to-r from-teal-500 to-cyan-500 h-auto text-white px-4 py-2"
    >
      <!-- Mobile navigation -->
      <div class="w-full flex flex-col md:hidden justify-center items-center">
        <h1 class="font-oleo text-2xl tracking-wide">Fitness food app</h1>
        <h2 class="font-mont text-lg">
          Showcase your fitness meals and keep on track
        </h2>
      </div>
      <!-- Desktop navigation -->
      <div class="w-full h-20 hidden md:flex md:flex-row">
        <div
          class="container mx-auto px-6 self-center justify-between flex flex-row"
        >
          <div>
            <h1 class="font-oleo text-4xl tracking-wide">Fitness Food App</h1>
          </div>
          <div>
            <button
              class="bg-teal-500 hover:bg-teal-600 duration-150 transition-colors px-3 py-2 text-white font-mont rounded-full focus:outline-none focus:ring border-2 border-teal-600"
            >
              Logout account
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
