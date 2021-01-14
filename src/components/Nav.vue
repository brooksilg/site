<template>
  <nav class="nav">
    <div class="container p-8">
      <Logo />
      <NavItems
        v-on:toggleDarkMode="onClickDarkMode"
        v-on:toggleNav="onClickNavActivator"
      />
    </div>
    <div
      class="mobile-nav absolute inset-0 h-screen md:hidden"
      :class="{ 'invisible pointer-events-none opacity-0': !navExpanded }"
      @click="onClickMobileNav($event)"
    >
      <div class="container p-8">
        <NavItems
          variant="mobile"
          v-on:toggleDarkMode="onClickDarkMode"
          v-on:toggleNav="onClickNavActivator"
          :navExpanded="navExpanded"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import NavItems from '@/components/NavItems.vue';
import Logo from '@/components/Logo.vue';

export default {
  name: 'Nav',
  data() {
    return {
      navExpanded: false,
    };
  },
  components: {
    NavItems,
    Logo,
  },
  methods: {
    onClickNavActivator(desiredNavState) {
      if (typeof desiredNavState !== 'undefined') {
        this.navExpanded = desiredNavState;
      } else {
        this.navExpanded = !this.navExpanded;
      }
    },
    onClickDarkMode() {
      this.$emit('toggleDarkMode');
    },
    onClickMobileNav(event) {
      if (event.target.classList.contains('nav-item')) {
        this.onClickNavActivator(false);
      }
    },
  },
};
</script>

<style>
.nav {
  left: 0;
  width: 100%;
  transition: background var(--duration-default);
}
.nav a:hover,
.nav .nav-item:hover {
  color: var(--fg-primary--alt);
}
.mobile-nav .nav-item {
  @apply mt-4;
  transition: margin-top var(--duration-default);
}
.mobile-nav.invisible .nav-item {
  @apply mt-2;
  transition: margin-top 0;
}
.mobile-nav {
  background: linear-gradient(var(--bg-primary) 50%, rgba(0,0,0,0) 100%);
  transition: opacity var(--duration-default), visibility 0s 0s;
}
.mobile-nav .router-link-exact-active:before {
  content: "•";
}
</style>
