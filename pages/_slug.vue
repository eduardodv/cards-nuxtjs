<template>
  <div>
    SINGLE
    {{ beers }}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $axios, params }) {
    const beers = await $axios.get(`https://api.nuxtjs.dev/beers/${params.slug}`).then((r) => { return r.data })
    return { beers }
  },
  data: () => ({

  }),
  mounted () {

  }
}
</script>
