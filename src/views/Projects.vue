<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container class="my-5">

      <v-expansion-panels accordion>

        <v-expansion-panel
          v-for="(project, index) in myProjects"
          :key="index"
        >
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">
              Due by {{ project.due }}
            </div>
            <div class="cnt">
              {{ project.content }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>

    </v-container>

  </div>
</template>

<script>
  export default {
    name: 'projects',
    data: () => ({
      projects: null
    }),
    computed: {
      myProjects() {
        return this.projects ? this.projects.filter(item => item.person === 'John Smith') : ''
      }
    },
    mounted() {
      this.projects = this.$store.getters.GET_PROJECTS
    }
  }
</script>
