import axios from "axios";

const getBooks = (context, params) => {
  return new Promise((resolve, reject) => {
    context.commit("fetch_books", params);
    axios
      .get("https://localhost:5001/api/books", {
        params: params
      })
      .then(resp => {
        const books = resp.data;
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
