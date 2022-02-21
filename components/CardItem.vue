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

        <v-btn icon @click="addWishlist(beer)">
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon :color="hasItem(beer.beer_id) ? 'green' : ''" @click="addCart(beer)">
          <v-icon>mdi-cart{{ hasItem(beer.beer_id) ? '-off' : '' }}</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
    <!-- <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :right="true"
      :color="color"
    >
      {{ text }}
      <template
        #action="
          {
            attrs
          }"
      >
        <v-btn
          icon
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar> -->
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    beer: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      // snackbar: false,
      // text: null,
      // timeout: -1,
      // color: null,
    }
  },
  computed: {
    ...mapGetters({
      hasItem: 'cart/hasItem'
    })
  },
  created () {
    // this.imageHeight()
  },
  mounted () {
    // window.addEventListener('resize', this.imageHeight)
  },
  methods: {
    ...mapActions('cart', ['addCart']),
    ...mapActions('wishlist', ['addWishlist'])

    // addWishlist () {
    //   if (this.active !== true) {
    //     this.active = true
    //     this.snackbar = true
    //     this.text = 'Adicionado aos favoritos com sucesso!'
    //     this.timeout = 2000
    //     return
    //   }
    //   this.active = false
    //   this.snackbar = false
    // }
    // imageHeight () {
    //   const imageHeight = document.querySelectorAll('.v-card .v-image__image')
    //   imageHeight.forEach(function (e) {
    //     e.style.height = `${e.offsetWidth}px`
    //     e.style.opacity = 0
    //   })
    // }
  }
}
</script>

<style lang="scss">
  @import '~/assets/components/card.scss';
</style>
