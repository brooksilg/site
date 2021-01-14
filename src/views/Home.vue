<template>
  <main class="home flex flex-grow items-center">
    <div class="container p-8 lg:flex justify-end items-center lg:h-full">
      <div class="lg:w-1/2 md:pr-16">
        <img
          src="~@/assets/img/brooks-ilg-headshot-square.jpg"
          alt="Brooks Ilg"
        >
      </div>
      <div class="lg:w-1/2 lg:p-16">
        <div class="font-serif italic text-xl lg:text-2xl">Hello, I am</div>
        <div class="text-3xl lg:text-4xl uppercase">Brooks Ilg</div>
        <hr class="w-16 border-solid border-1 my-8"/>
        <div class="font-serif italic text-xl lg:text-2xl">
          Frontend Developer & Team Lead at Booking.com with {{yearsExp}} years experience
          building impactful, reliable, and scalable solutions.
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      yearsExp: new Date().getFullYear() - 2011,
    };
  },
};
</script>

<style>
.home {
  color: var(--dark-fg-primary);
  background-color: var(--dark-bg-primary);
}
</style>
