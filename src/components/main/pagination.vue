<template>
  <ul class="pagination">
    <li class="pagination">
      <button type="button" :disabled="isInFirstPage" @click="onClickFirstPage">First</button>
    </li>
    <li class="pagination">
      <button type="button" :disabled="isInFirstPage" @click="onClickPreviousPage">Previous</button>
    </li>
    <!-- Visible Buttons Start -->
    <li v-for="page in pages" :key="page.name" class="pagination">
      <button
        :class="{ active: isPageActive(page.name) }"
        type="button"
        :disabled="page.isDisabled"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </button>
    </li>
    <!-- Visible Buttons End -->
    <li class="pagination-item">
      <button type="button" :disabled="isInLastPage" @click="onClickNextPage">Next</button>
    </li>
    <li class="pagination-item">
      <button type="button" :disabled="isInLastPage" @click="onClickLastPage">Last</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },

  computed: {
    ...mapGetters(['storedProdutList']),
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons
      }

      // When inbetween
      return this.currentPage - 1
    },
    pages() {
      const range = []

      for (let i = this.startPage; i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages); i++) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        })
      }

      return range
    }
  },
  created() {
    this.$store.dispatch('FETCH_PRODUCT_LIST')
  },
  isInFirstPage() {
    return this.currentPage === 1
  },
  isInLastPage() {
    return this.currentPage === this.totalPages
  },

  methods: {
    onClickFirstPage() {
      console.log(this.storedProdutList)
      this.$emit('pagechanged', 1)
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages)
    },
    isPageActive(page) {
      return this.currentPage === page
    }
  }
}
</script>

<style>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>
