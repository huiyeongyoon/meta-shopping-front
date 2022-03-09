<template>
  <div class="home">
    <SlideBanner />
    <BestProductList />
    <FeaturedProductList />
    <MiddleBanner />
    <BlogArticles />
    <InstagramArticles />
  </div>
</template>

<script>
import SlideBanner from '@/components/home/SlideBanner.vue';
import BestProductList from '@/components/home/BestProductList.vue';
import FeaturedProductList from '@/components/home/FeaturedProductList.vue';
import MiddleBanner from '@/components/home/MiddleBanner.vue';
import BlogArticles from '@/components/home/BlogArticles.vue';
import InstagramArticles from '@/components/home/InstagramArticles.vue';

export default {
  name: 'home',
  components: {
    SlideBanner,
    BestProductList,
    FeaturedProductList,
    MiddleBanner,
    BlogArticles,
    InstagramArticles
  }
}
</script>
