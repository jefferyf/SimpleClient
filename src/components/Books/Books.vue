<template>
  <div class="container">
    <h1>Books!</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.year }}</td>
        </tr>
      </tbody>
    </table>

    <b-pagination
      size="md"
      :total-rows="total"
      v-model="currentPage"
      :per-page="5"
      @input="toPage"
    >
    </b-pagination>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Books",
  mounted() {
    this.$store.dispatch("books/getBooks", { page: 1, per_page: 5 });
  },
  computed: {
    ...mapState({
      books: state => state.books.books.books,
      total: state => state.books.books.total,
      page: state => state.books.searchParams.page
    }),
    currentPage: {
      get: function() {
        return this.page;
      },
      set: function(newValue) {
        // eslint-disable-next-line
        console.log('setting: ', newValue);
      }
    }
  },
  methods: {
    toPage: function(ev) {
      this.$store.dispatch("books/getBooks", { page: ev, per_page: 5 });
    }
  }
};
</script>

<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
}
</style>
