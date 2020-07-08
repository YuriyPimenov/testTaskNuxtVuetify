<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-title>
          <span class="headline">Login Form</span>
        </v-card-title>
        <v-card-text>
        <v-form v-model="isValid">
            <v-text-field
                    label="Email"
                    v-model="email"
                    :rules="[
                      rules.email
                    ]"
                    required
            ></v-text-field>
            <v-text-field
                    label="password"
                    v-model="password"
                    type="password"
                    :rules="[rules.min]"
                    required
                    hint="At least 8 characters"
                    counter
            ></v-text-field>
        </v-form>

        </v-card-text>
        <v-divider class="mt-4"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          color="primary"
          :disabled="!isValid"
          text
          @click="submit"
          :loading="loading"
          >Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    layout: 'empty',
    head: {
      title: `Login Form`
    },
    data: () => ({
      loading: false,
      email: null,
      password: null,
      isValid:true,
      rules: {
        min: v => (v && v.length >= 8) || 'Min 8 characters',
        required: value => !!value || 'This field is required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }),
    mounted() {
      const {message} = this.$route.query

      switch (message) {
        case 'login':
          this.$notifier.showMessage({ content: 'You must go into sistem', color: '' })
          
          break
        case 'session':
          this.$notifier.showMessage({ content: 'Time of your session left', color: '' })

          break
      }
    },
    methods: {
      async submit () {
        if(this.isValid) {
          this.loading = true

          try {
            const formData = {
              email: this.email,
              password: this.password
            }

            await this.$store.dispatch('auth/login', formData)
            this.$router.push('/')

          } catch (e) {
            this.$notifier.showMessage({ content: 'It is wrong', color: '' })
            this.loading = false
          }

        }
      },
    },
  }
</script>