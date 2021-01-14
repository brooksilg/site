<template>
  <router-link to="/">
    <div
      class="link logo text-xl"
      :class="{ 'logo--iconified' : logoIconify }"
    >
      <div class="box box--left box-content"></div>
      <div class="box box--right box-content"></div>
      <div class="full-name">
        <span class="name--first">Brooks</span>
        &nbsp;
        <span class="name--last">Ilg</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  computed: {
    logoIconify() {
      return this.$route.fullPath === '/';
    },
  },
};
</script>

<style>
.logo {
  position: relative;
  display: inline-block;
}
.box {
  position: absolute;
  border: 2px solid;
  border-color: var(--fg-primary);
  width: calc(100% + 0.8em);
  height: calc(100% + 0.4em);
  left: calc(-0.4em - 2px);
  top: calc(-0.2em - 2px);
  transform-origin: center;
  transition: transform var(--duration-default) 0ms,
              width var(--duration-default) var(--duration-default),
              height var(--duration-default) var(--duration-default),
              left var(--duration-default) 0ms,
              top var(--duration-default) var(--duration-default),
              border-color var(--duration-default);
}
.logo:hover .box {
  border-color: var(--fg-primary--alt);
}
.full-name {
  text-transform: uppercase;
  line-height: 1em;
  transition: opacity calc(2*var(--duration-default)) calc(2*var(--duration-default)),
              visibility 0ms calc(2*var(--duration-default));
}
.name--last {
  font-weight: 600;
}
.logo.logo--iconified .box {
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  top: 3px;
  left: -10px;
  transition: transform var(--duration-default) calc(2*var(--duration-default)),
              width var(--duration-default) var(--duration-default),
              height var(--duration-default) var(--duration-default),
              left var(--duration-default) calc(2*var(--duration-default)),
              top var(--duration-default) var(--duration-default);
}
.logo.logo--iconified .box--right {
  left: 4px;
}
.logo.logo--iconified .full-name {
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--duration-default) 0ms,
              visibility 0ms var(--duration-default);
}
</style>
