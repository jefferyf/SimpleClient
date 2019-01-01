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
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Books",
  mounted() {
    this.$store.dispatch("getBooks");
  },
  computed: mapState(["books"])
};
</script>

<style scoped>
    .container {
        width: 800px;
        margin: 0 auto;
    }
</style>
