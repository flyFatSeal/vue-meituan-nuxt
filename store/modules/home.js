const state = () => ({
  menu: [],
  hotPlace: [],
  searchList: []
})

const mutations = {
  setMenu(state, val) {
    state.menu = val
  },
  setHotPlace(state, val) {
    state.hotPlace = val
  },
  setSearchList(state, val) {
    state.searchList = val
  }
}

const actions = {
  setMenu: ({
    commit
  }, menu) => {
    commit('setMenu', menu)
  },
  setHotPlace: ({
    commit
  }, hotPlace) => {
    commit('setHotPlace', hotPlace)
  },
  setSearchList: ({
    commit
  }, searchList) => {
    commit('setSearchList', searchList)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
