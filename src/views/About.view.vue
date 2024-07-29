<script setup lang="ts">
import Header from '@/components/header/Header.component.vue';

defineProps<{
  short: boolean
}>();
</script>

<template>
  <div class="about">
    <Header pageTitle="About Me" />
    <br>
    <div class="about__content">
      <h2 class="section-title">I build beautiful, user-friendly web experiences</h2>
      <p>
        I'm a passionate <strong>Front-End Developer</strong> with a strong passion for crafting intuitive and
        responsive user experiences (UX). I leverage my expertise in HTML, CSS, and JavaScript to build clean,
        <strong>maintainable</strong>, and scalable web applications that adapt seamlessly across all devices. My
        focus
        on <strong>best practices</strong> ensures long-term
        project health and a smooth <strong>development</strong> process.
      </p>

      <br>

      <p>
        I'm a lifelong learner, constantly expanding my <strong>knowledge</strong> and staying on top of the latest
        trends in Front-End
        Development. Let's collaborate and bring your vision to life!
      </p>

      <br>

      <p>
        For <strong>interactive</strong> and performant web applications, I turn to modern <strong>JavaScript</strong>
        frameworks like Vue.js.
      </p>

      <br>

      <p>
        But my <strong>dedication</strong> to quality goes beyond the Front-End. I'm <strong>proficient</strong> in
        testing technologies (Cypress, Vitest)
        to write reliable code and utilize performance <strong>optimization</strong> techniques to deliver
        lightning-fast loading times.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 30px;
}

.about__content strong {
  color: var(--color-accent);
}

.about__content p {
  margin: 0;
  margin-bottom: 5px;
  line-height: 27px;
}
</style>
