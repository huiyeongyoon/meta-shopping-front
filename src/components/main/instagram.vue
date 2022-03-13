<template>
  <div class="instagram">
    <div class="container-fluid">
      <div class="row">
        <div v-for="instagram in instgrames" :key="instagram.id" class="col-lg-2 col-md-4 col-sm-4 p-0">
          <div class="instagram__item" :class="instagram.image">
            <div class="instagram__text">
              <a :href="instagram.instagramName">{{ instagram.instagramName }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      instgrames: [
        { id: 1, instagramName: '@ aaaaaaaaaaa', image: 'set-bg-img7' },
        { id: 2, instagramName: '@ bbbbbbbbbbb', image: 'set-bg-img8' },
        { id: 3, instagramName: '@ ccccccccccc', image: 'set-bg-img9' },
        { id: 4, instagramName: '@ ddddddddddd', image: 'set-bg-img10' },
        { id: 5, instagramName: '@ eeeeeeeeeee', image: 'set-bg-img11' },
        { id: 6, instagramName: '@ fffffffffff', image: 'set-bg-img12' }
      ]
    }
  }
}
</script>

<style scoped>
.set-bg-img7 {
  background-image: url('../../../img/instagram/insta-1.jpg');
}

.set-bg-img8 {
  background-image: url('../../../img/instagram/insta-2.jpg');
}

.set-bg-img9 {
  background-image: url('../../../img/instagram/insta-3.jpg');
}

.set-bg-img10 {
  background-image: url('../../../img/instagram/insta-4.jpg');
}

.set-bg-img11 {
  background-image: url('../../../img/instagram/insta-5.jpg');
}

.set-bg-img12 {
  background-image: url('../../../img/instagram/insta-6.jpg');
}
</style>
