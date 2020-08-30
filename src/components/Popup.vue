<template>
  <v-dialog max-width="600px" v-model="dialog">

    <template v-slot:activator="{on}">
      <v-btn v-on="on" class="success caption">
        <v-icon left small>add</v-icon>
        <span>Add new project</span>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2 class="grey--text">Add a new project</h2>
      </v-card-title>
      <v-card-text>

        <v-form class="px-3" ref="form">

          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>

          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>

          <v-menu v-model="datePicker">
            <template v-slot:activator="{on, attrs}">
              <v-text-field
                label="Due date"
                prepend-icon="date_range"
                v-on="on"
                v-bind="attrs"
                :value="formattedDate"
                :rules="inputRules"
                readonly
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="due"
              @input="datePicker = false"
            ></v-date-picker>
          </v-menu>

        </v-form>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          depressed
          class="success caption mt-3"
          @click="submit"
          :loading="loading"
        >
          Add project
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'popup',
    data: () => ({
      title: '',
      content: '',
      due: null,
      datePicker: false,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false
    }),
    methods: {
      submit() {
        if(this.$refs.form.validate()){
          this.loading = true
          const project = {
            title: this.title,
            content: this.content,
            due: moment(this.due).format('DD MMMM YYYY'),
            person: 'John Smith',
            status: 'ongoing'
          }

          this.$store.dispatch('ADD_PROJECT', project)
            .then(() => {
              return new Promise(res => {
                setTimeout(() => {
                  this.loading = false
                  this.dialog = false
                  this.$emit('projectAdded')
                  res()
                }, 500)
              })
            })

        }
      }
    },
    computed: {
      formattedDate() {
        moment.locale('en')
        return this.due ? moment(this.due).format('DD MMMM YYYY') : ''
      }
    }
  }
</script>

<style scoped>

</style>