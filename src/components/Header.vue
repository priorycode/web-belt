<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { IconMenu2 } from '@tabler/icons-vue'

const route = useRoute()
const menuOpen = ref(false)

// Función auxiliar para asignar clases dinámicas a los <a>
const getLinkClasses = (path) => [
  // Clases originales que ya existían
  'hover:scale-125',
  'transition-all',
  'duration-300',
  'ease-in-out',
  // Clase adicional si la ruta está activa
  route.path === path ? 'scale-125 font-bold' : ''
]
</script>

<template>
  <!-- Encabezado con fondo dinámico -->
  <!-- Si la ruta es '/', se aplica bg-[#010411] bg-opacity-40, de lo contrario bg-[#28355F] -->
  <div :class="route.path === '/'
                ? 'bg-[#010411] bg-opacity-40'
                : 'bg-[#28355F]'"
       class="z-100"
  >
    <header class="container-all py-4 flex justify-between items-center relative">

      <!-- LOGO -->
      <a href="/">
        <img src="@/assets/img/beltlogo.png" class="w-[80px] md:w-[110px]" alt="logo">
      </a>

      <!-- ÍCONO DE HAMBURGUESA SOLO PARA MOBILES -->
      <button
          @click="menuOpen = !menuOpen"
          class="text-white text-3xl md:hidden focus:outline-none"
          aria-label="Abrir menú"
      >
        <IconMenu2 class="w-8 h-8" />
      </button>

      <!-- MENÚ DE NAVEGACIÓN (MÓVIL) CON TRANSICIÓN -->
      <transition name="slide-down">
        <nav
            v-if="menuOpen"
            class="absolute top-full left-0 w-full h-screen
                 md:static md:h-auto
                 text-[20px] text-white
                 flex flex-col md:flex-row
                 items-center md:items-center
                 gap-[65px]
                 py-5 md:py-0
                 justify-start z-50

                 /* Fondo dinámico: igual que el contenedor padre */
                 /* En rutas distintas a '/', se mantiene #28355F (sin opacidad) */
                "
            :class="route.path === '/'
                    ? 'bg-[#010411] bg-opacity-90 md:bg-transparent'
                    : 'bg-[#28355F] md:bg-transparent'"
        >
          <a href="/"       :class="getLinkClasses('/')">Inicio</a>
          <a href="/about"  :class="getLinkClasses('/about')">Nosotros</a>
          <a href="/projects" :class="getLinkClasses('/projects')">Proyectos</a>
          <a href="/services" :class="getLinkClasses('/services')">Servicios</a>
          <a href="/blog"   :class="getLinkClasses('/blog')">Blog</a>
          <a href="/contact" :class="getLinkClasses('/contact')">Contacto</a>
        </nav>
      </transition>

      <!-- MENÚ DE NAVEGACIÓN (ESCRITORIO) -->
      <nav class="hidden md:flex text-[20px] items-center gap-[67px] text-white">
        <a href="/"        :class="getLinkClasses('/')" data-aos="zoom-in" data-aos-duration="600">Inicio</a>
        <a href="/about"   :class="getLinkClasses('/about')" data-aos="zoom-in" data-aos-duration="700">Nosotros</a>
        <a href="/projects" :class="getLinkClasses('/projects')" data-aos="zoom-in" data-aos-duration="800">Proyectos</a>
        <a href="/services" :class="getLinkClasses('/services')" data-aos="zoom-in" data-aos-duration="900">Servicios</a>
        <a href="/blog"    :class="getLinkClasses('/blog')" data-aos="zoom-in" data-aos-duration="1000">Blog</a>
        <a href="/contact" :class="getLinkClasses('/contact')" data-aos="zoom-in" data-aos-duration="1100">Contacto</a>
      </nav>
    </header>
  </div>
</template>

<style scoped>
/* Transición para que el menú aparezca/desaparezca de arriba hacia abajo */
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-down-enter-to, .slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
