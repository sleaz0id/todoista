const user = (state = {}, action) => {
  if (action.token) {
    return {
      ...state,
      ...action.token,
    };
  }
  return state;
};

export default user;

export const getToken = (state) =>
  state.access_token;