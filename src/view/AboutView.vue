<script setup>

</script>

<template>
  <div class="container-hero h-screen ">
    <div class="container-all flex items-center pt-16 h-full">
      <div class="text-white max-w-[560px]">
        <h2 class="text-[28px] md:text-[50px] font-extrabold mb-[30px] md:mb-[39px]" data-aos="fade-up" data-aos-duration="1000">¿Donde nace Belt?</h2>
        <p class="mb-[20px] md:mb-[41px] text-justify text-[14px] md:text-[16px] font-normal" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          En el año 2018, un joven colombiano profesional, graduado en Mercadeo y Publicidad, se encontró atrapado en la monotonía de un empleo bancario que le robaba su pasión y creatividad. Consciente de las limitadas oportunidades laborales y los bajos salarios en su país, tomó una decisión audaz: dejar atrás la rutina y lanzarse a la mayor aventura de su vida. Su destino fue un país nórdico, donde comenzó a trabajar en una fábrica de producción de pescado. A pesar del esfuerzo físico y las largas jornadas, halló en los atardeceres del mar Báltico un refugio para su mente y espíritu. Fue en esa orilla helada, mirando el horizonte teñido de colores fríos, donde nació su verdadera inspiración. Desde su computadora, comenzó a diseñar logotipos para negocios en Polonia y América Latina, aferrándose a la creencia de que su creatividad lo llevaría lejos. Con el tiempo, su emprendimiento cobró vida, y decidió bautizarlo “Belt”, en honor al Báltico, cuyo nombre en latín le recordó el lugar donde todo comenzó.
        </p>
        <p class="text-center text-[14px] md:text-[16px] font-normal" data-aos="fade-zoom" data-aos-delay="1000" data-aos-duration="1000">
          Belt no solo representa una marca, sino también un símbolo de valentía, reinvención y el poder de convertir un sueño en realidad, sin importar la distancia.
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

</style>