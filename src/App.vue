<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from '@components/sidebar/Sidebar.component.vue';
</script>

<template>
  <Sidebar />

  <router-view v-slot="{ Component }">
    <Transition>
      <component id="content" :is="Component" />
    </Transition>
  </router-view>
</template>

<style>
#app {
  max-width: 1191px;
  margin-inline: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
}

#content {}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (min-width: 1200px) {
  #app {
    flex-direction: row;
  }
}
</style>
