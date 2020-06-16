<template>
  <v-dialog v-model="dialog" max-width="800px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" dark v-bind="attrs" v-on="on">
        <v-icon class="add__icon mr-2" @click="clearImage()">mdi-plus</v-icon>
        ADD NEW PEOPLE
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="pb-0">
        <span class="headline grey--text">Create New Profile</span>
        <span class="ml-4">OR</span>
        <v-btn color="success ml-4" @click="generateFakeData()">
          GENERATE HERE
        </v-btn>
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
                  v-model="person.name"
                ></v-text-field>
              </v-col>
              <v-col
                cols="11"
                sm="5"
                class="d-flex justify-center align-center"
              >
                <v-avatar class="grey lighten-3 mb-0 mt-0 " size="85">
                  <v-img v-if="person.image" :src="person.image"></v-img>
                  <v-img v-if="!person.image"></v-img>
                </v-avatar>

                <v-btn small color="success ml-6" @click="generateImage()">
                  GENERATE IMAGE
                </v-btn>

                <!-- <v-file-input
                label="Image"
                filled
                prepend-icon="mdi-camera"
                v-model="person.image"
              ></v-file-input> -->
              </v-col>
              <v-col cols="1" sm="1">
                <v-icon
                  v-if="person.image"
                  small
                  class="close__icon"
                  @click="clearImage()"
                  >mdi-close</v-icon
                >
              </v-col>
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
                  v-model="person.phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Email"
                  v-model="person.email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Website"
                  v-model="person.website"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="City"
                  v-model="person.address.city"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Country"
                  v-model="person.address.country"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  label="Company"
                  v-model="person.company.name"
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
        <v-btn dark color="red darken-1" @click="clearData()">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="success" @click="submit()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import faker from "faker";

export default {
  data() {
    return {
      dialog: false,
      valid: true,
      person: {
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
      const {
        name,
        email,
        phone,
        website,
        address,
        company,
        image,
        sentence,
        role,
        paragraphs
      } = this.person;

      const data = {
        card: {
          name,
          email,
          phone,
          website,
          address: {
            city: address.city,
            country: address.country
          },
          company: {
            name: company.name
          }
        },
        image,
        sentence,
        role,
        paragraphs,
        id: this.team.length + 1
      };

      this.$store.commit("SET_newPerson", data);
      this.$store.commit("SET_isTeamUpdated", true);

      this.dialog = false;
      this.$refs.form.reset();
    },

    generateFakeData() {
      let role, image, sentence, paragraphs, card;

      role = faker.name.jobTitle();
      image = faker.image.avatar();
      sentence = faker.lorem.sentence();
      paragraphs = faker.lorem.paragraphs();
      card = faker.helpers.createCard();

      const { name, email, phone, website, address, company } = card;

      this.person = {
        name,
        email,
        phone,
        website,
        address: {
          city: address.city,
          country: address.country
        },
        company: {
          name: company.name
        },
        image,
        sentence,
        role,
        paragraphs,
        id: this.team.length + 1
      };
    },

    generateImage() {
      this.$set(this.person, "image", faker.image.avatar());
    },

    clearData() {
      this.$refs.form.reset();
      this.person.image = null;
    },

    clearImage() {
      this.person.image = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.close__icon {
  position: relative;
  right: 215px;
}
.close__icon:hover {
  color: rgba(0, 0, 0, 0.9);
  cursor: pointer;
}
</style>
