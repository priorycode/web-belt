<script setup>

</script>

<template>
  <div class="container-hero h-screen">
    <div class="container-all flex items-center h-full pt-16">
     <div class="flex flex-col items-center">
       <h2 class="text-[28px] md:text-[46px] font-bold text-white mb-[39px] text-shadow"
           data-aos="fade-up" data-aos-duration="1000" >
         Un poco de nuestra experiencia
       </h2>
       <img src="@/assets/cliente.png" class="hidden md:block w-auto md:max-w-[630px]" data-aos="zoom-in" data-aos-duration="1200">
       <img src="@/assets/clientemovil.png" class="block md:hidden w-auto md:max-w-[630px]" data-aos="zoom-in" data-aos-duration="1200">
     </div>
    </div>
  </div>
</template>

<style scoped>
.container-hero{
  background-image: url("@/assets/project.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}
@media (max-width: 640px) {
  .container-hero{
    background-position: left;
  }
}
.text-shadow{
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>