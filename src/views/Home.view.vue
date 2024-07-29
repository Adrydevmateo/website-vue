<script setup lang="ts">
import Header from '@components/header/Header.component.vue';
import Sidebar from '@components/sidebar/Sidebar.component.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="home">
    <Header pageTitle="Home" />
    <br>
    <div class="home__content">
      <Sidebar class="hero__section" list-flow="row" />
      <section class="home__section about__section">
        <h2 class="section-title">About Me</h2>
        <div class="about__content">
          <p>
            Passionate <strong>Front-End Developer</strong> with solid knowledge of core web technologies
            (<strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>) and strong passion for
            crafting intuitive and <strong>responsive</strong> user <strong>experiences</strong> (UX).
          </p>

          <br />

          <p>
            I'm a lifelong learner, constantly expanding my <strong>knowledge</strong> and staying on top of the latest
            trends in <strong>Front-End Development</strong>. Let's collaborate and bring your vision to life!
          </p>
        </div>
        <RouterLink class="btn-learn-more" to="/">Learn More</RouterLink>
      </section>
      <section class="home__section portfolio__section"> </section>
      <section class="home__section contact__section"> </section>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 30px;
}

.home__section {
  margin-top: 103px;
}

.about__content strong {
  color: var(--color-accent);
}

.about__content p {
  margin: 0;
  margin-bottom: 5px;
  line-height: 27px;
}

.about__content p:last-child {
  margin-bottom: 50px
}

.btn-learn-more {
  box-shadow: var(--box-shadow);
  padding: 10px 22px;
  background-color: var(--color-neutral);
}

@media (hover:hover) {
  .btn-learn-more {
    opacity: var(--opacity-primary);
    transition: opacity var(--transition-primary);
  }

  .btn-learn-more:hover {
    opacity: initial;
  }
}

@media (min-width: 1200px) {
  .hero__section {
    display: none;
  }
}
</style>
