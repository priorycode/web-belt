<script setup>

</script>

<template>
  <div class="container-hero h-screen ">
    <div class="container-all flex items-start pt-32 md:pt-40 h-full">
      <div class="text-white max-w-[560px]">
        <h2 class="text-shadow text-[28px] md:text-[42px] font-bold mb-[30px] md:mb-[24px]" data-aos="fade-up" data-aos-duration="1000">¿Donde nace Belt?</h2>
        <p class="mb-[20px] md:mb-[10px] text-justify text-[14px] md:text-[16px] font-normal" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          En el año 2018, dos jóvenes colombianos, ambos profesionales en Mercadeo y Publicidad, se encontraron atrapados en la monotonía de empleos que apagaban su pasión y creatividad. Uno trabajaba en el sector bancario; el otro, en una agencia donde las ideas no tenían espacio para volar. Cansados de las limitadas oportunidades laborales y los bajos salarios en su país, tomaron una decisión audaz: dejar atrás la rutina y lanzarse a la mayor aventura de sus vidas.
        </p>
        <p class="mb-[20px] md:mb-[10px] text-justify text-[14px] md:text-[16px] font-normal" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          Su destino fue un país nórdico, donde comenzaron a trabajar en una fábrica de producción de pescado. Entre jornadas agotadoras y temperaturas implacables, encontraron en los atardeceres del mar Báltico un refugio para su mente y espíritu. En aquellas orillas heladas, mirando el horizonte teñido de colores fríos, surgió su verdadera inspiración.
        </p>
        <p class="mb-[20px] md:mb-[41px] text-justify text-[14px] md:text-[16px] font-normal" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          Desde sus computadoras, en las noches silenciosas del norte, comenzaron a diseñar logotipos para negocios locales de Polonia y América Latina, convencidos de que su creatividad los llevaría lejos. Con el tiempo, su emprendimiento cobró vida, y juntos decidieron bautizarlo "Belt" en honor al Báltico, cuyo nombre en latín le recordó el lugar donde todo comenzó.
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container-hero{
  background-image: url("@/assets/about.jpg");
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