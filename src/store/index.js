import Vue from "vue";
import Vuex from "vuex";
import faker from "faker";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentId: null,
    isTeamUpdated: false,
    team: [
      {
        id: 1,
        role: faker.name.jobTitle(),
        image: faker.image.avatar(),
        sentence: faker.lorem.sentence(),
        paragraphs: faker.lorem.paragraphs(),
        card: faker.helpers.createCard()
      },
      {
        id: 2,
        role: faker.name.jobTitle(),
        image: faker.image.avatar(),
        sentence: faker.lorem.sentence(),
        paragraphs: faker.lorem.paragraphs(),
        card: faker.helpers.createCard()
      },
      {
        id: 3,
        role: faker.name.jobTitle(),
        image: faker.image.avatar(),
        sentence: faker.lorem.sentence(),
        paragraphs: faker.lorem.paragraphs(),
        card: faker.helpers.createCard()
      },
      {
        id: 4,
        role: faker.name.jobTitle(),
        image: faker.image.avatar(),
        sentence: faker.lorem.sentence(),
        paragraphs: faker.lorem.paragraphs(),
        card: faker.helpers.createCard()
      },
      {
        id: 5,
        role: faker.name.jobTitle(),
        image: faker.image.avatar(),
        sentence: faker.lorem.sentence(),
        paragraphs: faker.lorem.paragraphs(),
        card: faker.helpers.createCard()
      }
    ]
  },
  mutations: {
    SET_currentId(state, payload) {
      state.currentId = payload;
    },
    SET_newPerson(state, payload) {
      state.team.push(payload);
    },
    SET_isTeamUpdated(state, payload) {
      state.isTeamUpdated = payload;
    }
  },
  actions: {},
  getters: {
    getPersonByPersonId: state => id => {
      return state.team.find(person => person.id === id);
    }
  },
  modules: {}
});
