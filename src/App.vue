<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from '@components/sidebar/Sidebar.component.vue';
</script>

<template>
  <Sidebar id="app-sidebar" list-flow="column" />

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
}

#app-sidebar {
  display: none;
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
    margin-top: 40px;
    flex-direction: row;
    align-items: start;
  }

  #content {
    margin-top: 20px;
  }

  #app-sidebar {
    display: initial;
  }

}
</style>
