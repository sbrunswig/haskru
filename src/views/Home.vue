
<script>
  import { ALL_BOOKS_QUERY } from '../constants/graphql';
  export default {
    name: 'Home',
    apollo: {
      books: {
        query: ALL_BOOKS_QUERY
      }
    }
  }
</script>

<template>
  <div class="home">
    {{ books }}
  </div>
</template>

