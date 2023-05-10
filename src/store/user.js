import axios from 'axios';

const initialState = {
  users: [],
  user: {},
  auth: {},
};

const CREATE_USER = 'CREATE_USER';
const FETCH_USER = 'FETCH_USER';
const SET_AUTH = 'SET_AUTH';
const FETCH_AUTH = 'FETCH_AUTH';

// ACTION CREATOR
export const _createNewUser = user => ({ type: CREATE_USER, user });
export const _fetchUser = user => ({ type: FETCH_USER, user });
export const _setAuth = auth => ({ type: SET_AUTH, auth });

export const createNewUser = credentials => {
  return async dispatch => {
    const { data: user } = await axios.post('/api/users', credentials);
    dispatch(_createNewUser(user));
  };
};

export const fetchUser = id => {
  return async dispatch => {
    const { data: user } = await axios.get(`/api/users/${id}`);
    dispatch(_fetchUser(user));
  };
};

// dispatch login - return the auth data (id, token etc.) - set the auth state
export const login = credentials => {
  return async dispatch => {
    const { data: data } = await axios.post('/api/users/login', credentials);
    console.log('this is the accessToken...', data);
    dispatch(_setAuth({ ...data }));
  };
};
export const logout = () => {
  console.log('user logged out...');
  return { type: _setAuth({}) };
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_AUTH:
      return {
        ...state,
        auth: action.auth,
      };

    default:
      return state;
  }
};

export default user;
