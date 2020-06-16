<template>
  <nav>
    <v-toolbar>
      <v-toolbar-title class="grey--text lighten-3 pa-2">
        RANDOM
        <span class="black--text">PEOPLE</span>
        <v-icon class="pl-4">mdi-face</v-icon>
      </v-toolbar-title>
      <v-toolbar-title class="grey--text lighten-3 pl-8">
        <v-flex>
          <Popup />
        </v-flex>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  components: {
    Popup
  }
};
</script>

<style lang="scss" scoped></style>
