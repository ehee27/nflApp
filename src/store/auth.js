import axios from 'axios';

const initialState = {
  auth: {},
};

const SET_AUTH = 'SET_AUTH';

// export const logout = () => {
//   window.localStorage.removeItem('token');
//   return { type: SET_AUTH, auth: {} };
// };

export const loginWithToken = () => {
  return async dispatch => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const response = await axios.get('/api/auth', {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: SET_AUTH, auth: response.data });
    }
  };
};

// export const attemptLogin = credentials => {
//   return async dispatch => {
//     console.log('this is what the THUNK got', credentials);
//     const response = await axios.post('/api/auth', credentials);
//     window.localStorage.setItem('token', response.data);
//     console.log('this is the response token', response.data);
//     dispatch(loginWithToken());
//   };
// };
export const attemptLogin = credentials => {
  return async dispatch => {
    console.log('this is what the THUNK got', credentials);
    const response = await axios.post('/api/auth', credentials);
    console.log('this is the response TOKEN...', response.data);
    dispatch({ type: SET_AUTH, auth: response.data });
    // dispatch(loginWithToken());
  };
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        auth: action.auth,
      };
    default:
      return state;
  }
};

export default auth;

// const auth = (state = {}, action) => {
//   if (action.type === "SET_AUTH") {
//     return action.auth;
//   }
//   return state;
// };
