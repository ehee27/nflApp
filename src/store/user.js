import axios from 'axios';

const initialState = {
  users: [],
  user: {},
};

const CREATE_USER = 'CREATE_USER';
const FETCH_USER = 'FETCH_USER';

// ACTION CREATOR
export const _createNewUser = user => ({ type: CREATE_USER, user });
export const _fetchUser = user => ({ type: FETCH_USER, user });

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

    default:
      return state;
  }
};

export default user;
