<template>
  <main class="404 h-full flex-grow">
    <article class="container max-w-3xl p-8 md:px-16 text-justify">
      <img
        src="https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif"
        alt="Travolta confused"
        class="w-full"
      >
      <router-link
        to="/"
      >
        <h1 class="text-xl md:text-3xl text-center">404: Go home</h1>
      </router-link>
    </article>
  </main>
</template>

<script>
export default {
  name: 'Page404',
};
</script>
