import firebase from "firebase/app";

export default {
    actions: {
        // eslint-disable-next-line no-unused-vars
        async login({dispatch, commit}, {email, password}){
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            }catch (e) {
                throw e
            }
        }
    }
}
