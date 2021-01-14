<template>
  <div class="float-right">
    <div
      class="flex flex-col items-end space-y-4"
      :class="{ 'md:hidden' : !isMobileNav }"
      @click="onClickNavActivator()"
    >
      <span class="flex flex-col space-y-1 p-1 cursor-pointer">
        <span class="w-4 border-t-2 border-current"></span>
        <span class="w-4 border-t-2 border-current"></span>
        <span class="w-4 border-t-2 border-current"></span>
      </span>
    </div>
    <div
      :class="{
        'main-nav float-right hidden md:flex space-x-12 text-l' : !isMobileNav,
        'flex flex-col items-end' : isMobileNav,
      }"
    >
      <router-link
        v-if="isMobileNav"
        class="nav-item"
        to="/"
      >
        Home
      </router-link>
      <router-link
        class="nav-item"
        to="/about"
      >
        About
      </router-link>
      <router-link
        class="nav-item"
        to="/resume"
      >
        Experience
      </router-link>
      <span
        class="nav-item flex items-center"
        @click="onClickDarkMode"
      >
        <MoonSVG
          width="1em"
          height="1em"
          class="inline-block"
        />
      </span>
    </div>
  </div>
</template>

<script>
import MoonSVG from '@/assets/svg/moon.svg';

export default {
  name: 'NavItems',
  components: {
    MoonSVG,
  },
  props: {
    variant: {
      type: String,
      default: 'desktop',
    },
    navExpanded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isMobileNav() {
      return this.variant === 'mobile';
    },
  },
  methods: {
    onClickDarkMode() {
      this.$emit('toggleDarkMode');
    },
    onClickNavActivator() {
      this.$emit('toggleNav');
    },
  },
};
</script>

<style>
.nav-item {
  cursor: pointer;
  border-bottom: 2px solid;
  border-color: transparent;
  transition: border-color var(--duration-default), margin-top var(--duration-default) 1ms;
}
.main-nav .router-link-exact-active {
  border-color: var(--fg-primary);
}
</style>
