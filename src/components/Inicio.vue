<template>
    <div class="container-fluid">
        <b-row class="nav d-flex justify-content-end">
            <b-col cols="12" id="navbar">
                <b-button variant="primary" @click="goToBookForm">Crear libro</b-button>
                <b-button variant="primary" @click="goToBookList">Lista de libros</b-button>
            </b-col>
        </b-row>
      <b-col cols="8" class="body-fixed">
        <b-container class="mt-4">
          <b-row>
            <BookCard v-for="book in books" :key="book.id" :book="book" />
          </b-row>
        </b-container>
      </b-col>
    </div>
</template>
  
  <script>
    import BookCard from './BookCard.vue';
  export default {
    components: {
      BookCard,
    },
    data() {
      return {
        books: [],
      };
    },
    methods: {
      goToBookForm() {
        this.$router.push('/book-form');
      },
      goToBookList() {
        this.$router.push('/book-list');
      },
      addBook(newBook) {
        this.books.push(newBook);
      },
    },
  };
  </script>

<style>
.nav .btn-primary {
    float: right;
    margin: 10px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-left: 20px;
    width: 150px;
    height: 50px;
    font-weight: bold;
}
</style>
  