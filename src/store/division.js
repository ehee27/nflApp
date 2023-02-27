import axios from 'axios';

const initialState = {
  divisions: [],
  division: {},
};

const FETCH_DIVISIONS = 'FETCH_DIVISIONS';
const FETCH_DIVISION = 'FETCH_DIVISION';

export const _fetchDivisions = divisions => ({
  type: FETCH_DIVISIONS,
  divisions,
});
export const _fetchDivision = division => ({ type: FETCH_DIVISION, division });

export const fetchDivisions = () => {
  return async dispatch => {
    const { data: divisions } = await axios.get('/api/divisions');
    dispatch(_fetchDivisions(divisions));
  };
};
export const fetchDivision = id => {
  return async dispatch => {
    const { data: division } = await axios.get(`/api/division/${id}`);
    dispatch(_fetchDivision(division));
  };
};

const divisions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DIVISIONS:
      return {
        ...state,
        divisions: action.divisions,
      };
    case FETCH_DIVISION:
      return {
        ...state,
        division: action.division,
      };
    default:
      return state;
  }
};

export default divisions;
