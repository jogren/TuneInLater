export const getUserFavorites = (state = [], action) => {
  switch(action.type) {
    case 'GET_USER_FAVORITES':
      return action.allFavorites;
    default:
      return state
  }
}