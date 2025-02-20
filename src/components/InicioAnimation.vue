<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import IconLogo from "@/components/img/IconLogo.vue"
import Header from "@/components/Header.vue"

// El HTML original que quieres renderizar.
const introHTML = `Bienvenidos al horizonte <br>
donde el frio <span class="text-[52px] md:text-[100px] text-[#A2CEFF]">inspira</span> <br>
y las <span class="text-[52px] md:text-[100px] text-[#A2CEFF]">ideas</span> navegan libres.`

// Para el efecto typing, separamos en tokens: texto vs etiquetas.
function parseHTMLSegments(html) {
  return html.match(/(<[^>]*>|[^<]+)/g) ?? []
}

const tokens = parseHTMLSegments(introHTML) // Separamos el HTML en tokens
const typedContent = ref("")

// Control para mostrar/ocultar la intro
const showIntro = ref(true)
// Control para mostrar/ocultar el logo (fade-in)
const logoVisible = ref(false)

// Para controlar en qué token vamos
let tokenIndex = 0

// Lógica de tipeo
function typeTokens() {
  if (tokenIndex >= tokens.length) {
    // Terminamos todos los tokens
    // Esperamos un poco y fade-out
    setTimeout(() => {
      showIntro.value = false
    }, 1000)
    return
  }

  const currentToken = tokens[tokenIndex]
  tokenIndex++

  // ¿Es una etiqueta HTML o texto normal?
  if (currentToken.startsWith('<') && currentToken.endsWith('>')) {
    // Etiqueta: se inyecta de golpe
    typedContent.value += currentToken
    typeTokens()
  } else {
    // Texto: se “tipea” carácter por carácter
    let charIndex = 0
    const text = currentToken
    const interval = setInterval(() => {
      typedContent.value += text[charIndex]
      charIndex++
      if (charIndex >= text.length) {
        clearInterval(interval)
        typeTokens()
      }
    }, 40) // velocidad de tipeo (ms)
  }
}

// Inicia animación: luego de un retardo, aparece el logo y arranca el tipeo
function startIntroAnimation() {
  // Aseguramos que el contenido y el índice se “reinicien” cada vez
  typedContent.value = ""
  tokenIndex = 0

  setTimeout(() => {
    logoVisible.value = true
    typeTokens()
  }, 800)
}

// -- DETECTAR RUTA PARA MOSTRAR/OCULTAR LA ANIMACIÓN --
const route = useRoute()

onMounted(() => {
  // Código original de localStorage (NO se elimina, para cumplir “no quites nada”)
  const shown = localStorage.getItem('introShown') === 'true'
  if (!shown) {
    localStorage.setItem('introShown', 'true')
  }

  // Agregamos el watch para controlar la animación según la ruta
  watch(
      () => route.path,
      (newPath) => {
        // Si estamos en "/", mostrar la animación
        if (newPath === '/') {
          showIntro.value = true
          logoVisible.value = false
          startIntroAnimation()
        } else {
          // Si no estamos en "/", ocultar la intro
          showIntro.value = false
        }
      },
      { immediate: true } // Se ejecuta al montar (por si la ruta inicial ya es "/")
  )
})
</script>

<template>
  <transition name="intro-fade">
    <!-- Sección de intro si showIntro == true -->
    <section
        v-if="showIntro"
        class="absolute top-0 bg-[#090F27] z-40 flex items-center h-full w-full overflow-hidden"
    >
      <!-- El texto: con el tamaño, posición y colores originales -->
      <h1 class="text-white font-bold text-[28px] md:text-[70px] max-w-[1000px] leading-[50px] md:leading-[90px] ml-5 md:ml-[180px] z-10">
        <!-- typedContent se va completando; usar v-html para su HTML -->
        <span v-html="typedContent"></span>
      </h1>

      <!-- Logo a la derecha, con fade-in suave -->
      <IconLogo
          v-if="logoVisible"
          color="#19253F"
          class="absolute md:right-[-550px] transition-opacity duration-700 opacity-0"
          :class="{ 'fade-in-logo': logoVisible }"
          size="w-full h-screen md:h-full"
      />
    </section>
  </transition>
</template>

<style scoped>
/* Fade in/out para la sección entera */
.intro-fade-enter-active,
.intro-fade-leave-active {
  transition: opacity 0.8s ease;
}
.intro-fade-enter-from,
.intro-fade-leave-to {
  opacity: 0;
}

/* Animación de aparición suave para el logo */
@keyframes fadeInLogo {
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-logo {
  animation: fadeInLogo 1s forwards;
}
</style>
