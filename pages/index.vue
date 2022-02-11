<template>
  <div id="dsd">
    <v-toolbar color="blue" dark>
      <v-toolbar-title>Discover</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-row justify="center">
        <v-col
          v-for="beer in beers"
          :key="beer.title"
          cols="6"
          sm="4"
          md="4"
          lg="3"
          xl="3"
        >
          <v-card>
            <v-img
              :src="beer.image_url"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            />
            <v-card-title>
              <NuxtLink to="/">
                {{ beer.name }}
              </NuxtLink>
            </v-card-title>
            <v-card-actions>
              <span class="price">${{ beer.price }}</span>
              <v-spacer />

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData (context) {
    const beers = await context.$axios.get('https://api.nuxtjs.dev/beers').then((r) => { return r.data })
    return { beers }
  },
  data: () => ({

  })
}
</script>

<style lang="scss">
  .v-card {
    height: 100%;
  }
</style>
