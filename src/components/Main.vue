<template>
  <v-container ref="overflow" id="overflow" class="pt-0 layout__main">
    <v-row
      v-for="person in team"
      :key="person.id"
      v-scroll:#overflow="onScroll"
    >
      <v-col column cols="12" class="justify-center pt-0">
        <v-card
          ref="card"
          :id="'card-' + person.id"
          max-width="380"
          class="list__items"
          :class="{ active: currentId === person.id }"
        >
          <v-row>
            <v-col
              cols="4"
              lg="4"
              sm="12"
              class="text-center pl-lg-12 pl-xl-8 pl-sm-0 d-flex align-center justify-center"
            >
              <v-avatar class="grey lighten-3" size="100">
                <v-img v-if="person.image" :src="person.image"></v-img>
                <v-img v-if="!person.image"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="8" lg="8" sm="12"
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
                  :href="'#card-' + person.id"
                  @click="showDetail(person.id)"
                  >More Detail</v-btn
                >
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-end layout__go__top__buton">
      <v-btn
        @click="goToTop"
        fab
        dark
        color="cyan"
        class="go__top__button"
        :class="{ activeButton: isScrollHeight, hideButton: !isScrollHeight }"
        ><v-icon large dark>mdi-chevron-up</v-icon></v-btn
      >
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isScrollHeight: false
    };
  },
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
    },
    goToTop() {
      // let e = document.querySelector("#overflow")
      let e = this.$refs.overflow;
      e.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    onScroll(e) {
      let offsetTop = e.target.scrollTop;
      if (offsetTop > 100) {
        this.isScrollHeight = true;
      } else if (offsetTop < 101) {
        this.isScrollHeight = false;
      }
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
// .list__items:hover {
//   background-color: rgb(243, 243, 243);
// }
.layout__main {
  height: 80vh;
  overflow: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.layout__main::-webkit-scrollbar {
  width: 12px;
}

.layout__main::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.layout__main::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 15px #a1a1a1;
  // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
.active {
  background-color: rgb(237, 237, 237);
  border-right: 4px solid #81c784;
}
.layout__go__top__buton {
  position: relative;
}
.go__top__button {
  position: fixed;
  bottom: 12%;
}
.hideButton {
  display: none;
}
.activeButton {
  display: block;
}
</style>
