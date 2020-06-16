<template>
  <v-container class="pt-0">
    <v-row v-for="person in team" :key="person.id">
      <v-col column cols="12" class="justify-center pt-0">
        <v-card
          ref="card"
          :id="'card-' + person.id"
          :href="'#card-' + person.id"
          max-width="380"
          class="list__items"
          :class="{ active: currentId === person.id }"
          @click="showDetail(person.id)"
        >
          <v-row>
            <v-col
              cols="4"
              xl="4"
              sm="12"
              class="text-center pl-xl-8 pl-sm-0 d-flex align-center justify-center"
            >
              <v-avatar class="grey lighten-3" size="100">
                <v-img v-if="person.image" :src="person.image"></v-img>
                <v-img v-if="!person.image"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="8" xl="8" sm="12"
              ><v-card-text class="text--primary">
                <div>
                  {{ person.card.name }}
                </div>

                <div class="grey--text">
                  {{ person.role }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  class="ma-2 button__show__detail"
                  outlined
                  color="indigo"
                  @click="showDetail(person.id)"
                  >More Detail</v-btn
                >
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    team() {
      return this.$store.state.team;
    },
    isTeamUpdated() {
      return this.$store.state.isTeamUpdated;
    },
    currentId() {
      return this.$store.state.currentId;
    }
  },
  methods: {
    showDetail(id) {
      this.$store.commit("SET_currentId", id);
      document
        .querySelector(`#card-${id}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  },
  watch: {
    team: {
      immediate: true,
      handler(team) {
        if (team.length && !this.isTeamUpdated) {
          setTimeout(() => {
            document.querySelector(".button__show__detail").click();
          }, 0);
        }
      }
    },
    isTeamUpdated: {
      handler(isTeamUpdated) {
        if (isTeamUpdated) {
          setTimeout(() => {
            document
              .querySelectorAll(".button__show__detail")
              [this.team.length - 1].click();
            this.$store.commit("SET_isTeamUpdated", false);
          }, 100);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.list__items:hover {
  background-color: rgb(243, 243, 243);
  cursor: pointer;
}
.active {
  background-color: rgb(237, 237, 237);
}
</style>
