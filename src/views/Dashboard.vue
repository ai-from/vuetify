<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn small text color="grey"
                   @click="sortBy('title')"
                   v-on="on"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption text-none">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn small text color="grey"
                   @click="sortBy('person')"
                   v-on="on"
            >
              <v-icon left small>person</v-icon>
              <span class="caption text-none">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>

      </v-row>

      <v-card
        v-for="(project, index) in projects"
        :key="index"
        flat
      >
        <v-row flat
               class="project mx-0"
               :class="project.status"
        >

          <v-col cols="12" sm="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col cols="4" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>

          <v-col cols="4" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>

          <v-col cols="4" sm="4" md="2"
                 class="d-flex justify-end align-end">
            <v-chip small
                    class="chip white--text"
                    :class="project.status">
              {{ project.status }}
            </v-chip>
          </v-col>

        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data: () => ({
    projects: null
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  mounted() {
    this.projects = this.$store.getters.GET_PROJECTS
  }
}
</script>

<style lang="css">
  .project.complete {border-left: 4px solid #3cd1c2;}
  .project.ongoing {border-left: 4px solid orange;}
  .project.overdue {border-left: 4px solid tomato;}

  .v-chip.chip:not(.v-chip--active).complete {background: #3cd1c2;}
  .v-chip.chip:not(.v-chip--active).ongoing {background: orange;}
  .v-chip.chip:not(.v-chip--active).overdue {background: tomato;}
</style>
