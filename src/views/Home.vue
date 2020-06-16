<template>
  <v-container class="pt-4">
    <v-row>
      <v-col cols="3" xl="3" sm="4" xs="6">
        <div>
          <Main />
        </div>
      </v-col>
      <v-col cols="9" xl="9" sm="8" xs="6">
        <Detail />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Main from "@/components/Main.vue";
import Detail from "@/components/Detail.vue";

export default {
  name: "Home",
  components: {
    Main,
    Detail
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
