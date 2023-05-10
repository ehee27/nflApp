import axios from 'axios';

const initialState = {
  teams: [],
  team: {},
};

const FETCH_TEAMS = 'FETCH_TEAMS';
const FETCH_TEAM = 'FETCH_TEAM';
const UPLOAD_PROFILE_PIC = 'UPLOAD_PROFILE_PIC';

export const _fetchTeams = teams => ({ type: FETCH_TEAMS, teams });
export const _fetchTeam = team => ({ type: FETCH_TEAM, team });
export const _uploadProfilePic = profilePic => ({
  type: UPLOAD_PROFILE_PIC,
  profilePic,
});

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

export const uploadProfilePic = team => {
  return async dispatch => {
    const { data: updated } = await axios.put(`/api/teams/${team.id}`, team);
    dispatch(_uploadProfilePic(updated));
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
    case UPLOAD_PROFILE_PIC:
      return {
        ...state,
        teams: state.teams.map(team =>
          team.id === action.team.id ? action.team : team
        ),
      };
    default:
      return state;
  }
};

export default teams;
