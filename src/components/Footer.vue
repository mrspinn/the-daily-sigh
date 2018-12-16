<template>
    <v-footer class="pa-3">
        <!-- SCROLL TO TOP -->
            <a
                href="#app"
                @click="$vuetify.goTo('#app', scrollOptions)"
                class="grey--text"
                title="Scroll to Top">
                    <v-layout class="align-center mt-1">
                        <span >Back to top&nbsp;</span>
                        <v-icon>keyboard_arrow_up</v-icon>
                    </v-layout>
            </a>
            <v-spacer></v-spacer>
            <div class="grey--text hidden-xs-only">&copy; Spencer Frost for Sport Travel {{ new Date().getFullYear() }}</div>
            <div class="grey--text hidden-sm-and-up caption">&copy; Spencer Frost for Sport Travel {{ new Date().getFullYear() }}</div>
    </v-footer>
</template>

<script>
export default {
  data () {
    return {
      scrollOptions: {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    }
  }
}
</script>

<style>

</style>
