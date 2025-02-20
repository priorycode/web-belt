<template>
  <!-- Renderizamos la bolita solo si está dentro de la página -->
  <div
      v-if="isMouseInside"
      class="cursor-follower"
      :style="cursorStyle"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

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
  if (!e.relatedTarget) {
    // El cursor ha salido del documento
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
  top: -9px;
  left: -15px;
  z-index: 999999;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  /* Color de fondo ajustable */
  background-color: rgba(255, 0, 0, 0.5);

  /* Para no interferir con clics */
  pointer-events: none;
}
</style>
