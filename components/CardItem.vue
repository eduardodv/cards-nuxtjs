<template>
  <v-card class="card-item">
    <NuxtLink :to="beer.slug">
      <v-img
        :src="beer.image_url"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.1)"
      />
    </NuxtLink>
    <div class="box">
      <v-card-title>
        <NuxtLink :to="beer.slug">
          {{ beer.name }}
        </NuxtLink>
      </v-card-title>
      <v-card-actions>
        <span class="price">{{ beer.price }}</span>
        <v-spacer />

        <v-btn icon color="red" @click="$nuxt.$emit('like')">
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    beer: {
      default: null,
      type: Object
    }
  },
  created () {
    // this.imageHeight()
  },
  mounted () {
    // window.addEventListener('resize', this.imageHeight)
  },
  methods: {
    imageHeight () {
      const imageHeight = document.querySelectorAll('.v-card .v-image__image')
      imageHeight.forEach(function (e) {
        e.style.height = `${e.offsetWidth}px`
        e.style.opacity = 0
      })
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/card.scss';
</style>
