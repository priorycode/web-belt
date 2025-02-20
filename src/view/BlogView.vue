<script setup>
import {ref} from "vue";
import blog1 from '@/assets/blog1.png'
import blog2 from '@/assets/blog2.png'
import blog3 from '@/assets/blog3.png'
import blog4 from '@/assets/blog4.png'
import BlogComponent from "@/components/blogComponent.vue";

const isModalOpen = ref(false);
// Nueva variable para el ID seleccionado
const selectedId = ref(null);

const openModal = (id) => {
  // Asigna el ID que se reciba y abre el modal
  selectedId.value = id;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const noticias = [
  {
    titulo: "Noticia: Mar Báltico",
    descripcion: "El Báltico es poco profundo, con aguas de salinidad moderada, menor que la de otros mares pero más salada que el agua dulce.",
    autor: "Sebastian",
    fecha: "15 de enero 2025",
    imagen: blog1
  },
  {
    titulo: "Noticia: ¿Qué es el marketing digital?",
    descripcion: "El marketing digital, también conocido como mercadotecnia digital, mercadeo en línea o incluso márqueting online, es el conjunto de estrategias que utilizan los medios digitales para promocionar productos o servicios.",
    autor: "Sebastian",
    fecha: "15 de enero 2025",
    imagen: blog2
  },
  {
    titulo: "¿Qué es la publicidad?",
    descripcion: "La publicidad es un conjunto de estrategias de comunicación diseñadas para compartir una solución comercial con un público de posibles consumidores.",
    autor: "Sebastian",
    fecha: "15 de enero 2025",
    imagen: blog3
  },
  {
    titulo: "¿Qué significa el diseño de un logo?",
    descripcion: "Desde la edad de piedra hasta nuestros días, los individuos hemos necesitado reconocimiento.",
    autor: "Sebastian",
    fecha: "15 de enero 2025",
    imagen: blog4
  }
];
</script>

<template>
  <div class="container-hero md:h-screen pb-3 md:pb-0">
    <div class="container-all pt-28 md:pt-40">
      <div>
        <h2
            class="text-white text-[32px] text-shadow font-medium mb-6 md:mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
          Últimas Noticias
        </h2>
        <div
            class="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <!-- Ajuste para pasar el ID como (index + 1) en el @click -->
          <div
              v-for="(noticia, index) in noticias"
              :key="index"
              class="w-full cursor-pointer hover:scale-125 md:max-w-[300px] container-card p-4 rounded-[25px]"
              data-aos="zoom-in"
              data-aos-duration="1100"
              @click="openModal(index + 1)"
          >
            <img
                :src="noticia.imagen"
                class="rounded-[20px] mb-[15px] h-[160px] w-full object-cover"
            />
            <h3 class="mb-2 text-white text-[16px]">
              {{ noticia.titulo }}
            </h3>
            <p class="text-white text-[12px] md:text-[14px] mb-4">
              {{ noticia.descripcion }}
            </p>
            <div class="flex items-center gap-2">
              <div>
                <img
                    :src="noticia.imagen"
                    class="w-5 h-5 object-cover rounded-full"
                />
              </div>
              <span class="text-white text-[12px]">
                {{ noticia.autor }} • {{ noticia.fecha }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pasamos el selectedId y el estado del modal al BlogComponent -->
  <BlogComponent
      :isOpen="isModalOpen"
      :selectedId="selectedId"
      @close="closeModal"
  />
</template>

<style scoped>
.container-hero {
  background-image: url("@/assets/blog.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.container-card {
  background: rgba(0, 0, 0, 0.52);
}
.container-card:hover{
  transition: all .2s ease-in-out;
  background: rgba(0, 0, 0, 0.7);
}
</style>
