<template>
  <main class="about h-full flex-grow ">
    <article class="container max-w-3xl p-8 md:px-16 text-justify">
      <img
        src="~@/assets/img/brooks-ilg-portrait.jpg"
        alt="Brooks Ilg"
      >
      <h1 class="text-2xl md:text-3xl text-center">Hi there, my name is <span class="inline-block">Brooks Ilg</span>.</h1>
      <p class="font-serif text-md md:text-xl">
        Born and raised in California, I am currently living in The Netherlands with my wife and son.
      </p>
      <p class="font-serif text-md md:text-xl">
        I am a Frontend Developer and Team Lead with 10 years of programming experience building impactful, reliable, and scalable solutions.
        I strive to be proficient and pragmatic in my craft.
      </p>
      <p class="font-serif text-md md:text-xl">
        I write mainly in JavaScript, and greatly enjoy working with Vue.js. My programming style is adaptive, but when possible I like to incorporate the ideas and simplicities of Functional Programming.
      <p class="font-serif text-md md:text-xl">
        You can find me enjoying the things that inspire and fuel me:
        <a href="https://youtu.be/3tmTZ3hNB38" target="_blank">drumming</a>,
        tinkering, oat milk, open-source software, grindcore,
        <a href="https://www.instagram.com/brooksilg/" target="_blank">vintage lenses</a>,
        and being a dad.
      </p>
      <div class="flex justify-center space-x-4">
        <a href="https://github.com/brooksilg" target="_blank">
          <GitHubIcon
            class="fill-current"
            width="1em"
            height="1em"
          />
        </a>
        <a href="https://www.instagram.com/brooksilg/" target="_blank">
          <InstagramIcon
            class="fill-current"
            width="1em"
            height="1em"
          />
        </a>
      </div>
    </article>
  </main>
</template>

<script>
import GitHubIcon from '@/assets/svg/github.svg';
import InstagramIcon from '@/assets/svg/instagram.svg';

export default {
  name: 'About',
  components: {
    GitHubIcon,
    InstagramIcon,
    // LastfmIcon,
  },
};
</script>
