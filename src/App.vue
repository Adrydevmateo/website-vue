<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from '@components/sidebar/Sidebar.component.vue';
</script>

<template>
  <Sidebar />

  <!-- TODO: try bringing the header here -->
  <router-view v-slot="{ Component }">
    <Transition name="bounce">
      <component id="content" :is="Component" />
    </Transition>
  </router-view>
</template>

<style>
#app {
  max-width: 1271px;
  margin-inline: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
}

#content {
  max-width: 831px;
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}

.bounce-leave-active {
  display: none;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@media (min-width: 1200px) {
  #app {
    flex-direction: row;
    align-items: start;
  }
}
</style>
