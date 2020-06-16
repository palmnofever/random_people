<template>
  <v-container v-if="currentId" class="pt-0">
    <v-row>
      <v-col cols="12" class="justify-center pt-0">
        <v-card class="pa-4">
          <v-flex class="d-flex justify-ceter align-center">
            <div>
              <v-avatar class="grey lighten-3 ma-4 mb-0 " size="150">
                <v-img v-if="person.image" :src="person.image"></v-img>
                <v-img v-if="!person.image"></v-img>
              </v-avatar>
            </div>
            <div class="text-h5 ma-4 font-weight-medium">
              {{ person.card.name }}
              <div class="text-subtitle-1 mt-3">
                {{ person.sentence }}
              </div>
            </div>
          </v-flex>

          <v-card-text>
            <div class="text-subtitle-2">
              <v-icon class="pr-2">mdi-phone</v-icon>
              <span class="grey--text text-subtitle-1">Phone:</span>
              {{ person.card.phone }}
            </div>
            <div class="text-subtitle-2">
              <v-icon class="pr-2">mdi-email</v-icon>
              <span class="grey--text text-subtitle-1">Email:</span>
              {{ person.card.email }}
            </div>
            <div class="text-subtitle-2">
              <v-icon class="pr-2">mdi-home</v-icon>
              <span class="grey--text text-subtitle-1">Address:</span>
              {{ person.card.address.city }}
              {{
                person.card.address.city && person.card.address.country
                  ? ","
                  : ""
              }}
              {{ person.card.address.country }}
            </div>
            <div class="text-subtitle-2 pb-4">
              <v-icon class="pr-2">mdi-web</v-icon>
              <span class="grey--text text-subtitle-1">Website:</span>
              {{ person.card.website }}
            </div>

            <v-divider class="pb-4"></v-divider>

            <div class="text-subtitle-2 pb-4">
              <!-- <v-icon class="pr-2">mdi-business</v-icon> -->
              <span class="grey--text text-subtitle-1">Company:</span>
              {{ person.card.company.name }}
            </div>
            <div class="text-subtitle-2 pb-4">
              <!-- <v-icon class="pr-2">mdi-home</v-icon> -->
              <span class="grey--text text-subtitle-1">Role:</span>
              {{ person.role }}
            </div>
            <div class="text-subtitle-2">
              <span class="black--text text-subtitle-1 font-weight-bold"
                >Paragraphs:</span
              >
              {{ person.paragraphs }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    currentId() {
      return this.$store.state.currentId;
    },
    person() {
      return this.currentId
        ? this.$store.getters.getPersonByPersonId(this.currentId)
        : 1;
    }
  }
};
</script>

<style lang="scss" scoped></style>
