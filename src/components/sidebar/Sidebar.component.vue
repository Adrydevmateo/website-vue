<script setup lang="ts">
import IconEmail from '@assets/svg/IcRoundEmail.svg'
import IconLinkedIn from '@assets/svg/MingcuteLinkedinFill.svg'
import IconPhone from '@assets/svg/MaterialSymbolsPhoneIphone.svg'
import IconCountry from '@assets/svg/MdiHomeCity.svg'
import Separator from '@assets/svg/separator.svg'

defineProps<{
  listFlow: 'column' | 'row'
}>();
</script>

<template>
  <div class="sidebar" :class="`sidebar-flow-${listFlow}`">
    <h1 class="sidebar__title">Adry <br :hidden="listFlow === 'row'"> Mateo Ramon</h1>
    <p class="sidebar__subtitle">Front-End Developer</p>

    <img class="sidebar__separator" :src="Separator" alt="separator image" :hidden="listFlow === 'row'" />

    <div class="info-list">
      <!-- Email -->
      <div class="info-list__item">
        <div class="info-list__item__icon-wrapper">
          <img :src="IconEmail" alt="email icon">
        </div>
        <div class="info-list__item__content">
          <p class="info-list__item__name">Email</p>
          <p class="info-list__item__value">adrydevmateo@gmail.com</p>
        </div>
      </div>

      <!-- LinkedIn -->
      <div class="info-list__item">
        <div class="info-list__item__icon-wrapper">
          <img :src="IconLinkedIn" alt="linkedin icon">
        </div>
        <div class="info-list__item__content">
          <p class="info-list__item__name">LinkedIn</p>
          <p class="info-list__item__value">adrydev</p>
        </div>
      </div>

      <!-- Phone -->
      <div class="info-list__item">
        <div class="info-list__item__icon-wrapper">
          <img :src="IconPhone" alt="phone icon">
        </div>
        <div class="info-list__item__content">
          <p class="info-list__item__name">Phone</p>
          <p class="info-list__item__value">(+1) 829 - 275 - 8177</p>
        </div>
      </div>

      <!-- Country -->
      <div class="info-list__item">
        <div class="info-list__item__icon-wrapper">
          <img :src="IconCountry" alt="country icon">
        </div>
        <div class="info-list__item__content">
          <p class="info-list__item__name">Country</p>
          <p class="info-list__item__value">Dominican Republic</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  margin-top: 50px;
  padding-left: 10px;
}

.sidebar-flow-column {
  max-width: 360px;
}

.sidebar__title,
.sidebar__subtitle {
  font-weight: var(--font-weight-extra-bold);
  filter: var(--drop-shadow);
}

.sidebar__title {
  font-size: calc(var(--font-bigger) + 4px);
}

.sidebar__subtitle {
  color: var(--color-accent-brighter);
  font-size: calc(var(--font-big) - 7px);
  margin-top: -16px;
}

.info-list {
  margin-top: -24px;
}

.sidebar-flow-row .info-list {
  display: grid;
  grid-template-columns: repeat(2, 235px);
  column-gap: 20px;
  row-gap: 40px;
  margin-top: 50px;
}

.info-list__item {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 4px;
}

.sidebar-flow-column .info-list__item {
  margin-block: 54px;
}

.sidebar-flow-row .info-list__item:nth-last-child(3) {
  grid-column-start: 2;
  grid-row-start: 2;
}

.sidebar-flow-row .info-list__item:last-child {
  grid-column-start: 2;
  grid-row-start: 1;
}

.info-list__item__icon-wrapper {
  display: grid;
  place-content: center;
}

.info-list__item__name,
.info-list__item__value {
  margin: 0;
}

.info-list__item__name {
  font-size: var(--font-small);
  opacity: var(--opacity-primary);
}

@media (min-width: 1200px) {
  .sidebar {
    position: sticky;
    position: -webkit-sticky;
    top: 1px;
  }
}
</style>
