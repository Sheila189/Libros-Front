<template>
  <b-card
    :title="book.name"
    :img-src="book.imageUrl"
    :img-alt="book.name"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <p>Libros</p>
    <b-card-text>
      <p>Autor: {{ book.author }}</p>
      <p>Género: {{ book.genre }}</p>
      <p>Año de publicación: {{ book.year }}</p>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>
