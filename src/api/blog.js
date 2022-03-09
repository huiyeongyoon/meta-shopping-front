import http from './http';

export default {
  async getArticles() {
    return http.get('api/blog-article.json');
  }
}
