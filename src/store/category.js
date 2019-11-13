import firebase from "firebase/app";

export default {
    actions: {
        async createCategory({commit, dispatch}, {title, limit}) {
            try {
                const uId = await dispatch('getUId');
                const category = await firebase.database().ref(`/users/${uId}/categories`).push({title, limit});
                return {title, limit, id: category.key}
            }catch (e) {
                commit('setError', e);
                throw e
            }
        }
    }
}
