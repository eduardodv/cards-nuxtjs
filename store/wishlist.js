export const state = () => ({
  products: []
})

export const actions = {
  addWishlist ({ commit }, data) {
    commit('ADD_WISHLIST', data)
  }
}

export const mutations = {
  ADD_WISHLIST (state, data) {
    state.products.push(data)
  }
}
