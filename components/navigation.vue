<template>
  <header>
    <nav
      class="flex px-4 py-2 text-white bg-gradient-to-r from-teal-500 to-cyan-500 h-14"
    >
      <!-- Mobile navigation -->
      <div
        class="flex flex-row items-center self-center justify-between w-full md:hidden"
      >
        <h1 class="text-2xl tracking-wide font-oleo">Fitness food app</h1>
        <div>
          <svg
            width="24"
            height="24"
            class="text-white stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
              fill="#ffffff"
            />
            <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
          </svg>
        </div>
      </div>

      <!-- Desktop navigation -->
      <div class="hidden w-full h-auto md:flex md:flex-row">
        <div
          class="container flex flex-row self-center justify-between px-6 mx-auto"
        >
          <div>
            <h1 class="text-4xl tracking-wide font-oleo">Fitness Food App</h1>
          </div>
          <div>
            <button
              class="px-3 py-2 text-white transition-colors duration-150 bg-teal-500 border-2 border-teal-600 rounded-full hover:bg-teal-600 font-mont focus:outline-none focus:ring"
            >
              Logout account
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      if (this.menuOpen == false) {
        this.menuOpen = true;
        document.body.style.overflow = "hidden";
      } else {
        this.menuOpen = false;
        document.body.style.overflow = "auto";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#flyoutMenu {
  overflow-y: hidden;
  height: 100vh;
  width: 100vw; /* approximate max height */
  background: red;
  position: fixed;
  z-index: 999;
  max-height: 0;
  overflow-y: hidden;
  -webkit-transition: max-height 0.5s ease-in-out;
  -moz-transition: max-height 0.5s ease-in-out;
  -o-transition: max-height 0.5s ease-in-out;
  transition: max-height 0.5s ease-in-out;
}
.open {
  max-height: 100vh;
}
#flyoutMenu.show {
  transform: translateY(0vw, 0, 0);
}
</style>
