<!-- <template>
    <div class="project-list">
      <div v-for="(project, index) in projects" :key="index" class="project-item">
        <div class="project-image" @mouseenter="showDescription(index)" @mouseleave="hideDescription(index)">
          <img :src="project.imageUrl" alt="Project Image">
          <div class="project-description" v-show="project.showDescription">
            {{ project.description }}
          </div>
        </div>
        <div class="project-name">{{ project.name }}</div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  
  interface Project {
    name: string;
    imageUrl: string;
    description: string;
    showDescription: boolean;
  }
  
  @Component
  export default class ProjectList extends Vue {
    projects: Project[] = [
      {
        name: 'Project A',
        imageUrl: 'https://example.com/project-a.png',
        description: 'This is the description for project A.',
        showDescription: false
      },
      {
        name: 'Project B',
        imageUrl: 'https://example.com/project-b.png',
        description: 'This is the description for project B.',
        showDescription: false
      },
      {
        name: 'Project C',
        imageUrl: 'https://example.com/project-c.png',
        description: 'This is the description for project C.',
        showDescription: false
      }
    ];
  
    showDescription(index: number) {
      this.projects[index].showDescription = true;
    }
  
    hideDescription(index: number) {
      this.projects[index].showDescription = false;
    }
  }
  </script> -->