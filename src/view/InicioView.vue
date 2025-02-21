<script setup>
</script>

<template>
  <div class="container-hero h-screen">
    <div class="container-all flex items-center h-full">
      <h1
          data-aos="fade-right"
          data-aos-duration="800"
          class="text-[60px] md:text-[113px] leading-[100.47px] tracking-[1.02px] font-semibold text-white"
      >
        Hacemos Publicidad,<br />
        que rompe
        <div
            data-aos="flip-up"
            data-aos-delay="800"
            data-aos-duration="1000"
            class="inline-flex pt-3"
        >
          <span class="bg-[#A1CEFF] px-3 text-[#111822]">
            el hielo
          </span>
        </div>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.container-hero {
  background-image: url("@/assets/fondo.gif");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
