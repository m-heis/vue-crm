import firebase from "firebase/app";

export default {
    actions: {
        async createRecord({dispatch, commit}, record){
            try {
                const uId = await dispatch('getUId');
                return await firebase.database().ref(`/users/${uId}/records`).push(record)
            }catch (e) {
                commit('setError', e);
                throw e
            }
        }
    }
}
