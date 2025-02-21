<script setup>
import { IconDirectionSignFilled } from '@tabler/icons-vue';

// Array con la información de cada card
const cardsData = [
  {
    title: 'Marketing',
    items: [
      {
        subtitle: 'Estrategia digital',
        description:
            'Trazamos estrategias digitales B2B efectivas. Investigamos el mercado, conocemos a tu audiencia y te guiamos en su implementación a través de sólidas estrategias comerciales.'
      },
      {
        subtitle: 'Gestión de Redes Sociales',
        description:
            'Impulsa tu marca con gestión de redes sociales: contenido estratégico, anuncios efectivos, engagement, crecimiento y resultados medibles.'
      },
      {
        subtitle: 'Social Media ADS',
        description:
            'Atrae clientes con Social Media Ads: segmentación precisa, anuncios impactantes, optimización constante y máximo retorno.'
      }
    ]
  },
  {
    title: 'Diseño',
    items: [
      {
        subtitle: 'Branding',
        description:
            'Desarrollamos tu branding con identidad sólida: logo, paleta de colores, tipografía, manual de marca y aplicaciones visuales.'
      },
      {
        subtitle: 'Diseño de Catálogos',
        description:
            'Potencia tus ventas con un catálogo comercial atractivo: diseño profesional, estructura estratégica e impacto visual asegurado.'
      },
      {
        subtitle: 'Diseño Material POP',
        description:
            'Diseñamos material POP efectivo: banners, volantes, afiches, displays, stoppers y más, para destacar tu marca.'
      },
      {
        subtitle: 'Ilustración',
        description:
            'Creamos ilustraciones personalizadas para tu marca: personajes, iconografías, infografías, storyboards y gráficos exclusivos de alto impacto.'
      }
    ]
  },
  {
    title: 'Tecnología',
    items: [
      {
        subtitle: 'Desarrollo de páginas web',
        description:
            'Diseñamos y desarrollamos páginas web funcionales y atractivas: UX/UI, responsividad, optimización SEO y máxima velocidad.'
      },
      {
        subtitle: 'Desarrollo de apps móviles',
        description:
            'Desarrollamos aplicaciones a medida: diseño intuitivo, experiencia optimizada, compatibilidad multiplataforma y funcionalidades personalizadas.'
      },
      {
        subtitle: 'Fotografía y video',
        description:
            'Ofrecemos servicios de video y fotografía profesional: producción, edición, sesiones creativas en set y con dron, contenido visual de alta calidad para tu marca.'
      }
    ]
  }
];
</script>

<template>
  <div class="container-hero md:h-screen pb-3 md:pb-0 ">
    <div class="container-all flex items-start pt-36  h-full md:pt-40">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[28px] md:gap-[48px]">
        <!-- Recorrer el array de cards -->
        <div
            v-for="(card, index) in cardsData"
            :key="index"
            class="container-card p-[28px] border-2 border-[#868C9A] rounded-[34px]"
            data-aos="zoom-in" data-aos-duration="1100"
        >
          <!-- Título principal de cada card -->
          <h2 class="text-[32px] md:text-[42px] font-extrabold text-white text-center mb-[28px]"

          >
            {{ card.title }}
          </h2>

          <!-- Sección de ítems dentro de cada card -->
          <div class="flex flex-col gap-3">
            <div v-for="(item, idx) in card.items" :key="idx">
              <div :class="`flex items-center gap-3 text-[#A0CEFF]`">
                <IconDirectionSignFilled class="w-6 h-6" />
                <h3 class="text-[18px] md:text-[24px] leading-7"
                >{{ item.subtitle }}</h3>
              </div>
              <p class="ml-12 mt-2 text-white text-[12px]"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <!-- Fin del v-for -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-hero{
  background-image: url("@/assets/servicio.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}
.container-card{
  background: rgba(0, 0, 0, 0.52);
}
</style>
