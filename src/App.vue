<template>
  <div
    id="app"
    class="flex flex-col min-h-screen"
    :class="{'dark': isDarkMode}"
  >
    <Nav
      v-on:toggleDarkMode="toggleDarkMode"
    />
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

const DARK_MODE = 'darkMode';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem(DARK_MODE, this.isDarkMode);
    },
  },
  created() {
    const darkBrowser = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = localStorage.getItem(DARK_MODE) !== null
      ? JSON.parse(localStorage.getItem(DARK_MODE)) : darkBrowser;
  },
};
</script>

<style>
#app {
  --bg-primary: var(--light-bg-primary);
  --fg-primary: var(--light-fg-primary);
  --fg-primary--alt: var(--light-fg-primary--alt);
  background-color: var(--bg-primary);
  color: var(--fg-primary);
  transition: background var(--duration-default),
              color var(--duration-default);
}
#app.dark {
  --bg-primary: var(--dark-bg-primary);
  --fg-primary: var(--dark-fg-primary);
  --fg-primary--alt: var(--dark-fg-primary--alt);
}
.fade-enter-active {
  transition: opacity calc(2 * var(--duration-default)) 200ms;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
