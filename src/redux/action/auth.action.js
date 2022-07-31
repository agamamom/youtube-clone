import firebase from 'firebase/compat/app';
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';

const login = () => async dispath => {
    try {
        dispath({
            type: LOGIN_REQUEST,
        })
        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)
        console.log(res)

        const accessToken = res.credential.accessToken
        const profile = {
            name: res.additionalUserInfo.profile.displayName,
            photoURL: res.additionalUserInfo.profile.photoURL,
        }

        dispath({
            type: LOGIN_SUCCESS,
            payload: accessToken
        })

        dispath({
            type: LOAD_PROFILE,
            payload: profile,
        })
    } catch (error) {
        console.log(error.message);
        dispath({
            type: LOGIN_FAIL,
            payload: error.message,

        })
    }
}

export default login;