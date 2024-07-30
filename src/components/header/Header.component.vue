<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Separator from '@assets/svg/separator.svg'

defineProps<{
  pageTitle: string,
}>()
</script>

<template>
  <header class="header">
    <div class="header__title-wrapper">
      <p class="header__title page-title">{{ pageTitle }}</p>
      <img :src="Separator" alt="separator image">
    </div>
    <nav class="header__nav">
      <RouterLink class="nav__link" to="/">Home</RouterLink>
      <RouterLink class="nav__link" to="/about">About</RouterLink>
      <RouterLink class="nav__link" to="/resume">Resume</RouterLink>
      <RouterLink class="nav__link" to="/portfolio">Portfolio</RouterLink>
      <RouterLink class="nav__link" to="/contact">Contact</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  column-gap: 100px;
  row-gap: 50px;
  background-color: var(--color-primary);
  padding-top: 20px;
}

.header__title {
  margin: 0;
}

.header__nav {
  margin-top: 11px;
  display: flex;
  flex-wrap: wrap;
}

.nav__link {
  position: relative;
  opacity: var(--opacity-primary);
  margin: 1em;
  height: max-content;
}

.nav__link::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 3px;
  background-color: var(--color-accent);
  bottom: -7px;
}

.router-link-active {
  opacity: 1;
}

@media (hover: hover) {
  .nav__link:hover {
    opacity: 1;
  }
}

@media (min-width: 1200px) {
  .header {
    padding-top: 30px;
  }
}
</style>
