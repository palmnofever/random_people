<template>
  <v-app class="grey lighten-4 application">
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
.theme--light.v-application {
  /* background-color: #0f1a2c; */
  background-color: #f8f7ff;
}
</style>
