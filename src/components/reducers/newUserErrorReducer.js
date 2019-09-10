export const newUserErrorReducer = (state = '', action) => {
  switch(action.type) {
    case 'NEW_USER_ERROR':
      return action.errorMsg;
    default:
      return state;
  }
}