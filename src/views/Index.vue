
<script>
  import { ALL_MINIFIGS_QUERY } from '../constants/graphql';
  export default {
    name: 'Index',
    apollo: {
      minifigures: {
        query: ALL_MINIFIGS_QUERY
      }
    }
  }
</script>

<template>
    <table>
    <tr v-for="(fig, index) in minifigures" v-bind:key="index" style="align-items:center; display:flex">
      <td style="width: 48px"><img v-bind:src="fig.imageUrl" height="24px"></td>
      <td>{{ fig.characterName }}</td>
    </tr>
  </table>
</template>

