<script setup>
import { IconSquareX } from '@tabler/icons-vue'
import blog1 from '@/assets/blog1.png'
import blog2 from '@/assets/blog2.png'
import blog3 from '@/assets/blog3.png'
import blog4 from '@/assets/blog4.png'
import { computed } from 'vue'

// Agregamos 'selectedId' para recibir el ID que viene del padre
const props = defineProps({
  isOpen: Boolean,
  selectedId: Number
});

// Emisor de eventos para cerrar el modal
const emit = defineEmits(["close"]);

// Array de noticias detalladas, cada una con su id
const noticias = [
  {
    id: 1,
    titulo: "Mar Báltico",
    contenido: [
      "El Báltico es poco profundo, con aguas de salinidad moderada, menor que la de otros mares pero más salada que el agua dulce. Se mezcla con las aguas saladas del Mar del Norte a través del estrecho de Kattegat y Skagerrak, y con el agua dulce de más de 200 ríos. El Báltico se caracteriza por su riqueza en biodiversidad y por unas especies adaptadas a sus condiciones especiales.",
      "Sin embargo, el Báltico es a la vez uno de los mares más contaminados del mundo, debido a la explotación de sus recursos y otras actividades económicas. La pesca insostenible es una de las peores amenazas para sus stocks pesqueros. Las prácticas de pesca destructiva, como el arrastre, los altos niveles de capturas accidentales y la pesca ilegal, no declarada y no reglamentada (IUU fishing) han ocasionado la degradación de sus hábitats marinos.",
      "La Comisión de Helsinki (Helcom) ha publicado recientemente un documento sobre las amenazas que sufre el ecosistema del Báltico. A la pesca destructiva, se suman otras como la eutrofización, causada por la afluencia de nutrientes y fósforo de la agricultura industrial que rodea el mar, que provoca la proliferación de algas tóxicas. Igualmente, hay que añadir la afluencia de sustancias tóxicas de otras actividades industriales, como la dioxina y de contaminantes orgánicos persistentes. Además el fondo marino se ve afectado por dragados y otros trabajos de construcción."
    ],
    autor: "Sebastian",
    fecha: "15 de enero 2025",
    imagen: blog1
  },
  {
    id: 2,
    titulo: "Noticia: ¿Qué es el marketing digital?",
    contenido: [
      "El marketing digital, también conocido como mercadotecnia digital, mercadeo en línea o incluso márqueting online, es el conjunto de estrategias que utilizan los medios digitales para promocionar productos o servicios. A diferencia del marketing tradicional, el marketing digital permite la medición y la personalización del mix de marketing digital en tiempo real a una audiencia segmentada.",
    ],
    autor: "Sebastian",
    fecha: "15 de enero 2025",
    imagen: blog2
  },
  {
    id: 3,
    titulo: "¿Qué es la publicidad?",
    contenido: [
      "La publicidad es un conjunto de estrategias de comunicación diseñadas para compartir una solución comercial con un público de posibles consumidores. A través de recursos visuales, sonoros o textuales, la publicidad busca atraer y captar la atención de las audiencias y convencerlas de adquirir un producto o servicio.",
      "Además de dar a conocer un servicio o producto, la publicidad busca generar más ventas, crear conciencia en nuevas audiencias o convertir una marca en la opción favorita de sus consumidores mediante ofertas y otras dinámicas.",
    ],
    autor: "Sebastian",
    fecha: "15 de enero 2025",
    imagen: blog3
  },
  {
    id: 4,
    titulo: "¿Qué significa el diseño de un logo?",
    contenido: [
      "Desde la edad de piedra hasta nuestros días, los individuos hemos necesitado reconocimiento. Esto puede lograrse a través de rasgos físicos especiales, personalidad, comportamiento o cualquier otra característica que nos diferencie del resto. Lo mismo sucede con las marcas y empresas: requieren ser identificadas, y para lograrlo utilizan un logotipo.",
      "Si lo piensas detenidamente, prácticamente todos los días convives con diferentes tipos de logos: por ejemplo, el de tu dispositivo móvil, el del blog de este artículo o el de la marca del café que estás bebiendo en este momento.",
      "Aunque forman parte de la vida cotidiana y no nos cuestionamos su importancia o utilidad, el logo es clave para el reconocimiento de una marca. Por ello es importante determinar es su objetivo y cómo debe conformarse para lograr una verdadera conexión y diferenciación en el mercado. A continuación te lo explicamos en detalle. "
    ],
    autor: "Sebastian",
    fecha: "15 de enero 2025",
    imagen: blog4
  }
];

// Computed para obtener la noticia seleccionada según el ID
const selectedNoticia = computed(() => {
  return noticias.find(noticia => noticia.id === props.selectedId);
});
</script>

<template>
  <!-- Mostrar el modal si isOpen es true -->
  <div
      v-if="isOpen"
      class="fixed w-full h-full inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  >
    <!-- Ajuste: max-h-screen y overflow-y-auto para forzar el scroll solo si es necesario -->
    <div
        class="
        container-card text-white py-6 px-5 md:px-60 shadow-lg relative animate-fadeIn container-all
        w-full h-full max-h-screen mt-[200px] flex flex-col
        overflow-y-auto
      "
    >
      <!-- Reemplazamos el src e información estática por datos dinámicos de selectedNoticia -->
      <img
          :src="selectedNoticia?.imagen || '@/assets/blog1.png'"
          class="rounded-[20px] w-full h-[400px] object-cover mb-3"
      />
      <h3 class="text-[32px] font-medium text-left mb-4">
        {{ selectedNoticia?.titulo || 'Mar Báltico' }}
      </h3>

      <!-- Aquí se muestran los párrafos de la noticia -->
      <!-- Mantenemos la estructura original, solo usamos v-for para mostrar el contenido dinámico. -->
      <div v-if="selectedNoticia?.contenido">
        <p
            v-for="(paragraph, index) in selectedNoticia.contenido"
            :key="index"
            class="mb-4"
        >
          {{ paragraph }}
        </p>
        <div class="flex items-center gap-2">
          <div>
            <img
                :src="selectedNoticia.imagen"
                class="w-8 h-8 object-cover rounded-full"
            />
          </div>
          <span class="text-white text-[16px]">
                {{ selectedNoticia.autor }} • {{ selectedNoticia.fecha }}
              </span>
        </div>
      </div>

      <!-- Botón para cerrar -->
      <button
          @click="emit('close')"
          class="px-2 py-2 bg-gray-200 text-white rounded-lg hover:bg-gray-300 absolute right-5 md:right-20"
      >
        <IconSquareX class="text-gray-500"/>
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}

.container-card {
  background: rgba(43, 58, 79, 0.9);
}
</style>
