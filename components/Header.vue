<template>
  <v-app-bar id="header" dark height="auto">
    <v-container>
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon class="d-none d-md-block">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon class="cart-btn">
        <v-icon>mdi-cart</v-icon>
        <span v-if="totalCart !== 0" class="cart-count">
          {{ totalCart }}
        </span>
      </v-btn>
      <v-btn icon class="d-md-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    title: 'LOGO'
  }),
  computed: {
    ...mapGetters({
      totalCart: 'cart/totalCart'
    })
  }
}
</script>

<style lang="scss">
  @import '~/assets/components/header.scss';
</style>
