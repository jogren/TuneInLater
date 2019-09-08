export const toggleFavoriteReducer = (state = [], action) => {
  switch(action.type) {
    case 'TOGGLE_FAVORITE':
      return action.favorites;
    case 'GET_USER_FAVORITES':
      return action.allFavorites;
    default:
      return state;
  }
}