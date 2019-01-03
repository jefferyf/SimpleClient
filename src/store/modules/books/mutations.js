const fetch_books = (state, params) => {
  state.searching = true;
  state.searchParams = params;
};

const fetch_books_success = (state, books) => {
  state.searching = false;
  state.books = books;
};

const fetch_books_error = (state, err) => {
  state.searching = false;
  state.status = err.data;
};

export default {
  fetch_books,
  fetch_books_success,
  fetch_books_error
};
