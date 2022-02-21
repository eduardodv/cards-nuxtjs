<template>
  <v-row class="py-6">
    <v-col
      v-for="beer in beers"
      :key="beer.title"
      cols="6"
      md="4"
      lg="3"
    >
      <CardItem :beer="beer" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $axios }) {
    const beers = await $axios.get('https://api.nuxtjs.dev/beers').then((r) => { return r.data })
    return { beers }
  },
  data: () => ({

  })
}
</script>
