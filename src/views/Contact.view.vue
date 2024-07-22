<script setup lang="ts">
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

      <form class="contact-form">
        <input type="email" name="email" id="contact__email" placeholder="Email">
        <textarea name="message" id="contact__message" placeholder="Message" rows="10" maxlength="860"></textarea>
      </form>
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

.contact-form {
  background-color: var(--reddish-orange-opacity-60);
  max-width: 738px;
  display: grid;
  gap: 10px;
  margin-top: 40px;
}

#contact__email,
#contact__message,
#contact__email::placeholder,
#contact__message::placeholder {
  font-weight: var(--font-weight-extra-bold);
  color: var(--pattens-blue-opacity-80);
}

#contact__email,
#contact__message {
  border: none;
  padding-inline: 16px;
  background-color: var(--color-primary);
  box-shadow: var(--box-shadow);
  min-width: 0;
}

#contact__email {
  max-width: 369px;
  height: 40px;
}

#contact__message {
  padding-block: 12px;
  resize: none;
}
</style>
