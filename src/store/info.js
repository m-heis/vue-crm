import firebase from "firebase/app";

export default {
    state: {
        info: {}
    },
    mutations: {
      setInfo(state, info){
          state.info = info
      },
      clearInfo(state){
          state.info = {}
      }
    },
    actions: {
        async updateInfo({dispatch, commit, getters}, toUpdate) {
            try {
                const uId = await dispatch('getUId');
                const updateData = {...getters.info, ...toUpdate};
                await  firebase.database().ref(`/users/${uId}/info`).update(updateData);
                commit('setInfo', updateData)
            }catch (e) {
                commit('setError', e);
                throw e
            }
        },
        async fetchInfo({dispatch, commit}) {
            try {
                const uId = await dispatch('getUId');
                const info = (await firebase.database().ref(`users/${uId}/info`).once('value')).val();
                commit('setInfo', info)
            }catch (e) {
                commit('setError', e);
                throw e
            }
        }
    },
    getters: {
        info: s => s.info
    }
}
