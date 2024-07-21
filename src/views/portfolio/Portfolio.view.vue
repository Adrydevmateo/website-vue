<script setup lang="ts">
import Header from '@components/header/Header.component.vue';
import { ref } from 'vue';
import { projects, type Project } from './Portfolio';
import IconGitHub from '@assets/svg/SkillIconsGithubDark.svg'
import IconViewMore from '@assets/svg/MaterialSymbolsKeyboardArrowDownRounded.svg'

const listOfProjects = ref<Array<Project<string>>>(projects)

const showMoreProjects = ref(false)
const showLessProjects = ref(false)

const toggleShowMoreProjects = () => {
  showMoreProjects.value = !showMoreProjects.value
}

</script>

<template>
  <div class="portfolio">
    <Header pageTitle="Portfolio" />
    <br>
    <div class="portfolio__content">
      <h2 class="section-title">Web Development</h2>
      <ul class="portfolio__projects">
        <li class="portfolio__project" v-for="project, index in listOfProjects" :key="index"
          :class="{ 'hide-project': index > 6, 'show-project': showMoreProjects }">
          <a :href="project.live" target="_blank">{{ project.name }}</a>
          <a :href="project.repo" target="_blank">
            <img :src="IconGitHub" alt="github icon">
          </a>
        </li>

        <br>

        <button class="view-more_less" v-if="listOfProjects.length > 7" @click="toggleShowMoreProjects">
          <span class="view-more_less__txt" v-if="!showMoreProjects">View More</span>
          <span class="view-more_less__txt" v-else>View Less</span>
          <img :class="{ 'inverted': showMoreProjects }" :src="IconViewMore" alt="view more icon">
        </button>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.portfolio {
  padding: 30px;
}

.portfolio__projects {
  padding: 0;
  padding-left: 7px;
  list-style: none;
  display: grid;
  gap: 14px;
  position: relative;
}

.portfolio__project {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 30px;
  padding-left: 7px;
}

.portfolio__project::before {
  position: absolute;
  content: '';
  background-color: var(--color-accent);
  width: 2.75px;
  height: 100%;
  margin-block: auto;
  left: 0;
  top: 0;
  bottom: 0;
}

.portfolio__project a {
  padding: 6px;
  display: block;
  font-weight: var(--font-weight-semi-bold);
}

.portfolio__project a:first-child {
  filter: var(--drop-shadow);
}

.view-more_less {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: grid;
  margin-inline: auto;
}

.view-more_less__txt {
  color: var(--color-neutral);
  font-weight: var(--font-weight-bold);
  filter: var(--drop-shadow);
}

.view-more_less img {
  margin-inline: auto;
}

.view-more_less img {
  padding-left: 4px;
}

.view-more_less img.inverted {
  rotate: 180deg;
  padding-right: 4px;
}

.hide-project {
  position: absolute;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
}

.show-project {
  position: relative;
  bottom: initial;
  pointer-events: initial;
  opacity: initial;
}

@media (hover:hover) {
  .portfolio__project a {
    opacity: var(--opacity-primary);
  }

  .portfolio__project:hover a {
    opacity: initial;
  }

  .portfolio__project::before {
    height: 80%;
    transition: height var(--transition-primary);
  }

  .portfolio__project:hover::before {
    height: 100%;
  }
}
</style>
