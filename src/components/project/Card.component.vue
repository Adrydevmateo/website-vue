<script setup lang="ts">
defineProps<{
  type?: 1 | 2 | 3
  title: string,
  description: string,
  link: {
    to: string,
    label: string
  }
}>();
</script>

<template>
  <div class="preview-card" :class="{ 'type-1': !type || type === 1, 'type-2': type === 2, 'type-3': type === 3 }">
    <div class="card__icon-wrapper">
      <slot name="icon"></slot>
    </div>
    <p class="card__title">{{ title }}</p>
    <p class="card__description">{{ description }}</p>
    <div class="card__link-wrapper">
      <a class="card__link" :href="link.to">{{ link.label }}</a>
    </div>
  </div>
</template>

<style scoped>
.preview-card,
.card__link {
  border-radius: 7px;
  filter: var(--drop-shadow);
}

.preview-card {
  padding: 18px 20px 30px 20px;
  max-width: 376px;
}

.type-1 {
  background-color: var(--color-accent);
}

.type-2 {
  background-color: var(--color-secondary);
  color: var(--color-primary);
}

.type-3 {
  background-color: var(--color-neutral);
}

.card__icon-wrapper {
  display: flex;
  justify-content: end;
}

.type-1 .card__icon-wrapper {
  color: var(--color-secondary);
}

.typ-2 .card__icon-wrapper {
  color: var(--color-primary);
}

.card__title {
  filter: var(--drop-shadow);
  font-size: 20px;
  margin: 0;
}

.card__description {
  opacity: .8;
  margin-bottom: 24px;
}

.card__link-wrapper {
  width: max-content;
}

.card__link {
  padding: 10px 14px;
  color: var(--color-secondary);
  background-color: var(--color-primary);
}

@media (hover:hover) {
  .card__link-wrapper:hover {
    scale: 1.05;
    transition: scale var(--transition-primary);
  }

  .card__link:hover {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    transition: background-color var(--transition-primary), color var(--transition-primary);
  }
}
</style>
