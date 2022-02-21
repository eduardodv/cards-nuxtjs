export const state = () => ({
  products: []
})

export const actions = {
  addCart ({ commit }, data) {
    commit('ADD_CART', data)
  },
  removeCart ({ commit }, data) {
    commit('REMOVE_CART', data)
  }
}

export const mutations = {
  ADD_CART (state, data) {
    let exist = false
    state.products = state.products.map((product) => {
      if (product.beer_id === data.beer_id) {
        exist = true
        // product.quantity += 1
      }
      return product
    })
    if (!exist) {
      state.products.push({ ...data, quantity: 1 })
    }
  },
  REMOVE_CART (state, data) {
    console.log(data)
    return data
  }
}

export const getters = {
  totalCart (state) {
    return state.products.length
  },
  hasItem: state => (id) => {
    return !!state.products.find(e => e.beer_id === id)
  }
}
