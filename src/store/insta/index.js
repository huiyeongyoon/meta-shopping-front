import instaApi from '@/api/insta';

export default {
  namespaced: true,
  state: {
    articles: []
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = [].concat(articles);
    }
  },
  actions: {
    async setArticles({ commit }) {
      const response = await instaApi.getArticles();

      commit('setArticles', response.data);
    }
  }
}
