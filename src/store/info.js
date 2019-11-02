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
        async fetchInfo({dispatch, commit}) {
            try {
                const uId = await dispatch('getUId');
                const info = (await firebase.database().ref(`users/${uId}/info`).once('value')).val();
                commit('setInfo', info)
                // eslint-disable-next-line no-empty
            }catch (e) {}
        }
    },
    getters: {
        info: s => s.info
    }
}
