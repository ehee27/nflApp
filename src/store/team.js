import axios from 'axios';

const initialState = {
  teams: [],
  team: {},
};

const FETCH_TEAMS = 'FETCH_TEAMS';
const FETCH_TEAM = 'FETCH_TEAM';

export const _fetchTeams = teams => ({ type: FETCH_TEAMS, teams });
export const _fetchTeam = team => ({ type: FETCH_TEAM, team });

export const fetchTeams = () => {
  return async dispatch => {
    const { data: teams } = await axios.get('/api/teams');
    dispatch(_fetchTeams(teams));
  };
};
export const fetchTeam = id => {
  return async dispatch => {
    const { data: team } = await axios.get(`/api/teams/${id}`);
    dispatch(_fetchTeam(team));
  };
};

const teams = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMS:
      return {
        ...state,
        teams: action.teams,
      };
    case FETCH_TEAM:
      return {
        ...state,
        team: action.team,
      };
    default:
      return state;
  }
};

export default teams;
