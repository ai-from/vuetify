<template>
  <v-app>

    <v-main class="grey lighten-4">
      <NavBar/>
      <div class="content mx-4">
        <router-view></router-view>
      </div>
    </v-main>

  </v-app>
</template>

<script>
import NavBar from "./components/NavBar"

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>
