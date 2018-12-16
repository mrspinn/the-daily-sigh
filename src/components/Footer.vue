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
            <div class="grey--text">&copy; Spencer Frost for Sport Travel {{ new Date().getFullYear() }}</div>
    </v-footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
