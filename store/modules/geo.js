const state = () => ({
  position: {
    province: '北京',
    city: '北京市'
  }
})

const mutations = {
  setPosition(state, val) {
    state.position = val
  }
}

const actions = {
  setPosition: ({ commit }, position) => {
    commit('setPosition', position)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
