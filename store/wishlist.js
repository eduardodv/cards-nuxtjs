export const state = () => ({
  products: []
})

export const actions = {
  addWishlist ({ commit }, data) {
    commit('ADD_WISHLIST', data)
  },
  removeWishlist ({ commit }, data) {
    commit('REMOVE_WISHLIST', data)
  }
}

export const mutations = {
  ADD_WISHLIST (state, data) {
    let exist = false
    state.products = state.products.map((product) => {
      if (product.beer_id === data.beer_id) {
        exist = true
      }
      return product
    })
    if (!exist) {
      state.products.push({ ...data })
    }
  },

  REMOVE_WISHLIST (state, id) {
    const productIndex = state.products.findIndex(product => product.beer_id === id)
    state.products.splice(productIndex, 1)
  }
}

export const getters = {
  hasItemWishlist: state => (id) => {
    return !!state.products.find(e => e.beer_id === id)
  }
}
