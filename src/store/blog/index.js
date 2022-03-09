import blogApi from '@/api/blog';

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
      const response = await blogApi.getArticles();

      commit('setArticles', response.data);
    }
  }
}
