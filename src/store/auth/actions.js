import axios from "axios";

// src/store/auth/actions.js
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export const userLoggedIn = (token, profile) => {
  return {
    type: "USER_LOGGED_IN",
    payload: {
      me: profile,
      accessToken: token
    }
  };
}

// A thunk creator
export const login = (email, password) => {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    const response = await axios.post(`${API_URL}/login`, {
      email: email,
      password: password
    })
    const token = response.data.jwt
    localStorage.setItem('AccessToken', token)
    const profile = await axios.get(`${API_URL}/me`, { 
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const profileinfo = profile.data
    dispatch(userLoggedIn(token, profileinfo))
  };
}

// A thunk creator
export const bootstrapLoginState = () => {
  return async (dispatch, getState) => {

    const token = localStorage.getItem('AccessToken')

      if(token) {
        const profile = await axios.get(`${API_URL}/me`, { 
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch(userLoggedIn(token, profile.data))
      } 
    } 
  }

  export function logout(dispatch, getState) {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem('AccessToken');
  }
