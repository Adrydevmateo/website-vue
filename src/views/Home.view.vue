<script setup lang="ts">
import ContactFormComponent from '@/components/contact/ContactForm.component.vue';
import CardComponent from '@/components/project/Card.component.vue';
import Header from '@components/header/Header.component.vue';
import Sidebar from '@components/sidebar/Sidebar.component.vue';

const projects = [
  {
    title: "Lorem ipsum"
  },
  {
    title: "Dolor siamet"
  },
]
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
      </section>
      <section class="home__section portfolio__section">
        <h2 class="section-title">Portfolio</h2>
        <div class="portfolio__projects">
          <CardComponent v-for="project, index in projects" :key="index" :type="1" :title="project.title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            :link="{
              to: '',
              label: 'Learn More'
            }">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path fill="#41b883" d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z" />
                <path fill="#41b883" d="m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z" />
                <path fill="#35495e" d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z" />
              </svg>
            </template>
          </CardComponent>
        </div>
      </section>
      <section class="home__section contact__section">
        <h2 class="section-title">Contact Me</h2>
        <ContactFormComponent />
      </section>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 30px;
}

.home__section,
.hero__section {
  margin-bottom: 103px;
}

.about__content strong {
  color: var(--color-accent);
}

.about__content p {
  margin: 0;
  margin-bottom: 5px;
  line-height: 27px;
}

.portfolio__projects {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-flow: dense;
}

.contact__section .section-title {
  margin-bottom: -6px;
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

@media (min-width: 270px) {
  .portfolio__projects {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (min-width: 697px) {
  .portfolio__projects {
    grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
  }
}

@media (min-width: 841px) {
  .portfolio__projects {
    grid-template-columns: repeat(auto-fill, minmax(376px, 1fr));
  }
}

@media (min-width: 1200px) {
  .hero__section {
    display: none;
  }
}
</style>
