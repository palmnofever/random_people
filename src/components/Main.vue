<template>
  <v-container>
    <v-row v-for="person in team" :key="person.id">
      <v-col column cols="12" class="justify-center hidden-lg-and-down">
        <v-card max-width="380">
          <v-row>
            <v-col cols="4" class="text-center pl-8 d-flex align-center">
              <v-avatar class="grey lighten-3" size="100">
                <v-img v-if="person.image" :src="person.image"></v-img>
                <v-img v-if="!person.image"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="8"
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

      <v-col cols="12" class="justify-center d-xl-none">
        <v-card max-width="380">
          <v-row>
            <v-col cols="12" class="d-flex justify-center pa-0 pt-4">
              <v-avatar class="grey lighten-3" size="100">
                <v-img v-if="person.image" :src="person.image"></v-img>
                <v-img v-if="!person.image"></v-img>
              </v-avatar>
            </v-col>
            <v-col column cols="12 pa-0" class="d-flex justify-center"
              ><v-card-text class="text--primary text-center">
                <div>
                  {{ person.card.name }}
                </div>

                <div class="grey--text">
                  {{ person.role }}
                </div>
              </v-card-text>
            </v-col>
            <v-col column cols="12 pa-0 pb-2" class="d-flex justify-center">
              <v-card-actions>
                <v-btn outlined color="indigo" @click="showDetail(person.id)"
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
    }
  },
  methods: {
    showDetail(id) {
      this.$store.commit("SET_currentId", id);
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
          const team_length = this.team.length;
          console.log(team_length);
          setTimeout(() => {
            let j = document
              .querySelectorAll(".button__show__detail")
              [team_length - 1].click();
            console.log(j);
            this.$store.commit("SET_isTeamUpdated", false);
          }, 100);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
