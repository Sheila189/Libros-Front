<template>
    <b-form @submit="onSubmit" class="d-flex justify-content-center mt-4 form-container d-flex flex-column">
      <b-row>
        <b-col cols="6">
          <b-form-group label="Nombre del libro">
            <b-form-input v-model="book.name" required></b-form-input>
          </b-form-group>
          <b-form-group label="Autor">
            <b-form-input v-model="book.author" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
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
        </b-col>
      </b-row>
      <b-button type="submit" variant="primary">Registrar libro</b-button>
    </b-form>
</template>

<script>
export default {
  data() {
    return {
      book: {
        name: "",
        author: "",
        genre: "",
        year: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log("Enviando formulario...", this.book);
    },
  },
};
</script>

<style>
.btn-primary {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  width: 150px;
  height: 50px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.form-container {
  width: 800px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  margin: auto;
}
</style>
