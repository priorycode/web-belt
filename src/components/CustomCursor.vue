<template>
  <!-- Mostramos el ícono solo si el mouse está dentro de la página -->
  <IconDelfin
      v-if="isMouseInside"
      class="cursor-follower hidden md:block"
      :style="cursorStyle"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
// Importamos el ícono de Tabler Icons
import { IconBallVolleyball } from '@tabler/icons-vue';
import IconDelfin from "@/components/img/IconDelfin.vue";

const x = ref(0);
const y = ref(0);
let targetX = 0;
let targetY = 0;

// Controla si el mouse está dentro de la ventana/documento
const isMouseInside = ref(false);

function handleMouseMove(e) {
  targetX = e.pageX;
  targetY = e.pageY;
  if (!isMouseInside.value) {
    isMouseInside.value = true;
  }
}

function handleMouseOut(e) {
  // Si no hay elemento relacionado, significa que el cursor salió del documento
  if (!e.relatedTarget) {
    isMouseInside.value = false;
  }
}

/**
 * Animación (requestAnimationFrame) para crear el efecto de "arrastre"
 * acercando (x, y) a (targetX, targetY) gradualmente.
 */
function animate() {
  // Ajusta la velocidad (cuanto mayor, más rápido sigue al mouse).
  const speed = 0.09;

  x.value += (targetX - x.value) * speed;
  y.value += (targetY - y.value) * speed;

  requestAnimationFrame(animate);
}

// Inicializamos listeners y animación cuando se monta el componente
onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseout', handleMouseOut);
  animate();
});

// Quitamos listeners al desmontar
onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseout', handleMouseOut);
});

// Calculamos el estilo de transformación según las coordenadas
const cursorStyle = computed(() => ({
  transform: `translate3d(${x.value}px, ${y.value}px, 0)`,
}));
</script>

<style scoped>
.cursor-follower {
  position: fixed;
  top: -15px;
  left: -18px;
  z-index: 999999;

  /* Ajusta el tamaño del ícono a tu gusto */
  width: 30px;
  height: 30px;

  /* Para no interferir con clics */
  pointer-events: none;

  /* Ajusta el color del ícono, si quieres */
  color: #ff0000;
}
</style>
