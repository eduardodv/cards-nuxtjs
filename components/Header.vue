<template>
  <header>
    <v-app-bar
      color="blue accent-4"
      dark
    >
      <v-container>
        <v-toolbar-title class="text-center">
          {{ title }}
        </v-toolbar-title>
        <v-spacer />
        <!-- <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
      </v-container>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  data: () => ({
    title: 'Cards'
  })
}
</script>

<style lang="scss">
  @import '~/assets/header.scss';
</style>
