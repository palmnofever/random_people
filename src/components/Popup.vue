<template>
  <v-dialog v-model="dialog" max-width="800px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" dark v-bind="attrs" v-on="on">
        ADD NEW PEOPLE
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="pb-0">
        <span class="headline">Create New Profile</span>
      </v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Name*"
                  required
                  hint="You can submit only name"
                  persistent-hint
                  v-model="person.card.name"
                ></v-text-field>
              </v-col>
              <v-file-input
                label="Image"
                filled
                prepend-icon="mdi-camera"
                v-model="person.image"
              ></v-file-input>
              <v-col cols="12">
                <v-text-field
                  label="Description"
                  type="Description"
                  v-model="person.sentence"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Phone"
                  v-model="person.card.phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Email"
                  v-model="person.card.email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Website"
                  v-model="person.card.website"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="City"
                  v-model="person.card.address.city"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Country"
                  v-model="person.card.address.country"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  label="Company"
                  v-model="person.card.company.name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Role" v-model="person.role"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Paragraph (Footer)"
                  type="Address"
                  v-model="person.paragraphs"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="submit()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      valid: true,
      person: {
        card: {
          name: null,
          email: null,
          phone: null,
          website: null,
          address: {
            city: null,
            country: null
          },
          company: {
            name: null
          }
        },
        image: null,
        sentence: null,
        role: null,
        paragraphs: null,
        id: null
      }
    };
  },
  computed: {
    team() {
      return this.$store.state.team;
    }
  },
  methods: {
    submit() {
      const { name, email, phone, website } = this.person.card;
      const data = {
        card: {
          name,
          email,
          phone,
          website,
          address: {
            city: null,
            country: null
          },
          company: {
            name: null
          }
        },
        image: null,
        sentence: null,
        role: null,
        paragraphs: null,
        id: this.team.length + 1
      };
      this.$store.commit("SET_newPerson", data);
      this.$store.commit("SET_isTeamUpdated", true);
      console.log(name, email, phone, website);
      this.dialog = false;
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss" scoped></style>
