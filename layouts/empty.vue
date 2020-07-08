<template>
<v-app dark>
  <Snackbar></Snackbar>
  <v-main>
      <v-container  fill-height>
        <nuxt />
      </v-container>
    </v-main>
</v-app>
</template>

<script>
import Snackbar from '~/components/Snackbar.vue'
export default {
  components: {Snackbar}
}
</script>