<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">

      <v-row wrap>
        <v-col cols="12" sm="6" lg="3"
          v-for="(person, index) in team"
          :key="index"
        >
          <v-card flat class="text-center ma-3">

            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="require(`@/${person.avatar}`)"/>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>

<script>
  export default {
    data: () => ({
      team: null
    }),
    mounted() {
      this.team = this.$store.getters.GET_TEAM
    }
  }
</script>

<style scoped>

</style>