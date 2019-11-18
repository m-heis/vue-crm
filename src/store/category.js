import firebase from "firebase/app";

export default {
    actions: {
        async fetchCategories({commit, dispatch}) {
            try {
                const uId = await dispatch('getUId');
                const categories = (await firebase.database().ref(`/users/${uId}/categories`).once('value')).val() || {};

                return Object.keys(categories).map(key => ({...categories[key], id: key}))

            }catch (e) {
                commit('setError', e);
                throw e
            }
        },
        async fetchCategoryById({commit, dispatch}, id) {
            try {
                const uId = await dispatch('getUId');
                const category = (await firebase.database().ref(`/users/${uId}/categories`).child(id).once('value')).val() || {};
                return {...category, id}

            }catch (e) {
                commit('setError', e);
                throw e
            }
        },
        async updateCategory({commit, dispatch}, {title, limit, id}) {
            try {
                const uId = await dispatch('getUId');
                await firebase.database().ref(`/users/${uId}/categories`).child(id).update({title, limit});
            }catch (e) {
                commit('setError', e);
                throw e
            }
        },
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
