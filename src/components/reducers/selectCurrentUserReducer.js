export const selectCurrentUserReducer = (state = '', action) => {
  switch(action.type) {
    case 'SELECT_CURRENT_USER':
      return action.userObj;
    default:
      return state;
  }
}