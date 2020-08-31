<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <v-row class="px-4">
        <span class="d-flex align-center">Success!</span>
        <v-spacer></v-spacer>
        <v-btn text class="white--text font-weight-light" @click="snackbar = false">Close</v-btn>
      </v-row>
    </v-snackbar>

    <v-toolbar flat class="transparent">

      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span>Ai</span>
        <span class="font-weight-light">from</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{on}">
          <v-btn text v-on="on" color="grey">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.url"
          >
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>

    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="purple darken-3">

      <v-row class="d-flex flex-column text-center">
        <v-col class="mt-5">
          <v-avatar size="100">
            <img :src="require('@/assets/1.jpg')" />
          </v-avatar>
          <p class="white--text subtitle mt-1">John Smith</p>
        </v-col>
        <v-col>
          <Popup @projectAdded="snackbar = true" />
        </v-col>
      </v-row>

      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(item, index) in links"
            :key="index"
            router
            :to="item.url"
          >
            <v-list-item-icon>
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="white--text"
              >
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
  import Popup from "./Popup"
  export default {
    components: {
      Popup
    },
    data: () => ({
      drawer: false,
      snackbar: false,
      links: [
        {icon: 'dashboard', text: 'Dashboard', url: '/'},
        {icon: 'folder', text: 'My projects', url: '/projects'},
        {icon: 'person', text: 'Team', url: '/team'}
      ]
    })
  }
</script>

<style scoped>

</style>