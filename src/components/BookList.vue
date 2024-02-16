<template>
  <div>
    <b-table
      striped
      hover
      items="books"
      fields="['name', 'author', 'genre', 'year']">
      <template slot="table-row" slot-scope="row">
        <tr>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.author }}</td>
          <td>{{ row.item.genre }}</td>
          <td>{{ row.item.year }}</td>
          <td>
            <b-button variant="primary" size="sm" @click="editBook(row.item)">Editar</b-button>
            <b-button variant="danger" size="sm" @click="deleteBook(row.item)">Eliminar</b-button>
          </td>
        </tr>
      </template>
    </b-table>
    
    <b-modal ref="editModal" :title="book.name">
      <b-form @submit="onSubmitEdit">
        <b-form-group label="Nombre del libro">
          <b-form-input v-model="book.name" required></b-form-input>
        </b-form-group>
        <b-form-group label="Autor">
          <b-form-input v-model="book.author" required></b-form-input>
        </b-form-group>
        <b-form-group label="Género">
          <b-form-select v-model="book.genre" required>
            <option value="">Selecciona un género</option>
            <option value="Ficción">Ficción</option>
            <option value="No ficción">No ficción</option>
          </b-form-select>
        </b-form-group>
        <b-form-group label="Año de publicación">
          <b-form-input v-model="book.year" type="number" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Actualizar</b-button>
      </b-form>
    </b-modal>
    
    <b-modal ref="deleteModal" title="Eliminar libro">
      <p>¿Estás seguro de eliminar el libro "{{ book.name }}"?</p>
      <b-button variant="primary" @click="deleteBookConfirmed">Eliminar</b-button>
      <b-button variant="secondary" @click="cancelDelete">Cancelar</b-button>
    </b-modal>
  </div>
</template>


<script>
export default {
  data() {
    return {
      books: [
        {
          name: "Libro 1",
          author: "Autor 1",
          genre: "Ficción",
          year: 2020,
        },
        {
          name: "Libro 2",
          author: "Autor 2",
          genre: "No ficción",
          year: 2021,
        },
      ],
      book: {}, 
    };
  },
  methods: {
    editBook(book) {
      this.book = book;
      this.$refs.editModal.show();
    },
    onSubmitEdit(event) {
      event.preventDefault();
      this.$refs.editModal.hide(); 
    },
    deleteBook(book) {
      this.book = book; 
      this.$refs.deleteModal.show(); 
    },
    deleteBookConfirmed() {
      this.$refs.deleteModal.hide(); 
    },
    cancelDelete() {
      this.$refs.deleteModal.hide();
    },
  },
};
</script>
