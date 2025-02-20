<script setup>
import { IconDirectionSignFilled } from '@tabler/icons-vue';

// Array con la información de cada card
const cardsData = [
  {
    title: 'Marketing',
    items: [
      {
        gapClass: 'gap-1', // Se respeta exactamente la clase que usas en el primer ítem
        subtitle: 'Estrategia Digital',
        description:
            'Trazamos estrategias digitales B2B efectivas. Investigamos el mercado, conocemos a tu audiencia y te guiamos en su implementación a través de un sólido framework.'
      },
      {
        gapClass: 'gap-2',
        subtitle: 'Gestión de Redes Sociales',
        description:
            'Trazamos estrategias digitales B2B efectivas. Investigamos el mercado, conocemos a tu audiencia y te guiamos en su implementación a través de un sólido framework.'
      },
      {
        gapClass: 'gap-2',
        subtitle: 'Social Media ADS',
        description:
            'Humanizamos tus anuncios, conectando de manera auténtica con la audiencia para ampliar tu visibilidad, aumentar el tráfico y optimizar las conversiones.'
      }
    ]
  },
  {
    title: 'Diseño',
    items: [
      {
        gapClass: 'gap-1',
        subtitle: 'Branding',
        description:
            'Le damos poder a tu marca al crear una identidad sólida que refleje tus valores en cada detalle.'
      },
      {
        gapClass: 'gap-2',
        subtitle: 'Diseño de Catálogos',
        description:
            'Creamos presentaciones comerciales con el mejor detalle para mejorar la buena imagen de tu empresa.'
      },
      {
        gapClass: 'gap-2',
        subtitle: 'Diseño Material POP',
        description:
            'Diseñamos desde tarjetas de presentación, flyers y afiches hasta impresiones en gran formato.'
      },
      {
        gapClass: 'gap-2',
        subtitle: 'Ilustración',
        description:
            'Capturamos la esencia de tu marca, ilustrando personajes y escenarios que reflejen tu identidad y transmitan tu mensaje de manera auténtica.'
      }
    ]
  },
  {
    title: 'Tecnología',
    items: [
      {
        gapClass: 'gap-1',
        subtitle: 'Desarrollo de páginas web',
        description:
            'Damos vida a la interfaz de usuario de tu sitio web o app con un diseño atractivo e intuitivo.'
      },
      {
        gapClass: 'gap-2',
        subtitle: 'Desarrollo de Apps Shopify',
        description:
            'Resolvemos desafíos de e-commerce para mejorar la experiencia de compra de tus clientes.'
      },
      {
        gapClass: 'gap-2',
        subtitle: 'Desarrollo de Apps móviles',
        description:
            'Creamos puentes de conexión entre tus sistemas y aplicaciones, logrando una operación sincronizada y optimizada.'
      }
    ]
  }
];
</script>

<template>
  <div class="container-hero md:h-screen pb-3 md:pb-0 ">
    <div class="container-all flex items-start pt-36 md:items-center  h-full md:pt-16">
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
              <div :class="`flex items-center ${item.gapClass} text-[#A0CEFF]`">
                <IconDirectionSignFilled class="w-6 h-6" />
                <h3 class="text-[18px] md:text-[24px] "
                >{{ item.subtitle }}</h3>
              </div>
              <p class="ml-8 text-white text-[12px]"
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
