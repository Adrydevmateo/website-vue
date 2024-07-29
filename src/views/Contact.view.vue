<script setup lang="ts">
import ContactFormComponent from '@/components/contact/ContactForm.component.vue';
import Header from '@/components/header/Header.component.vue';

</script>

<template>
  <div class="contact">
    <Header pageTitle="Contact Me" />
    <br>
    <div class="contact__content">
      <div class="contact__options" role="list">
        <div class="contact__option" role="listitem">
          <p>Phone</p>
          <p>(+1) 829 - 275 - 8177</p>
        </div>
        <div class="contact__option" role="listitem">
          <p>Email</p>
          <p>adrydevmateo@gmail.com</p>
        </div>
        <div class="contact__option" role="listitem">
          <p>Country</p>
          <p>Dominican Republic</p>
        </div>
      </div>

      <ContactFormComponent />
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: 30px;
}

.contact__options {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.contact__option {
  box-shadow: var(--box-shadow);
  display: grid;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-inline: 20px;
  flex-grow: 1;
}

.contact__option p {
  margin: 10px auto;
  font-weight: var(--font-weight-semi-bold);
}

.contact__option p:first-child {
  color: var(--color-neutral);
  filter: var(--drop-shadow);
}

.contact__option:first-child,
.contact__option:last-child {
  max-width: 224px;
}
</style>
