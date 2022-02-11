<template>
  <v-container>
    <v-toolbar color="blue" dark>
      <v-toolbar-title>Discover</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row>
      <v-col
        v-for="beer in beers"
        :key="beer.title"
        cols="6"
        sm="4"
        md="4"
        lg="3"
        xl="2"
      >
        <CardItem :beer="beer" />
      </v-col>
    </v-row>
  </v-container>
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
