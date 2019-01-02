import axios from "axios";

const getBooks = context => {
  return new Promise((resolve, reject) => {
    context.commit("fetch_books");
    axios
      .get("https://localhost:5001/api/books", {
        params: {
          page: 1,
          per_page: 3
        }
      })
      .then(resp => {
        const books = resp.data.books;
        context.commit("fetch_books_success", books);
        resolve(resp);
      })
      .catch(err => {
        context.commit("fetch_books_error", err.response);
        reject(err);
      });
  });
};

export default {
  getBooks
};
