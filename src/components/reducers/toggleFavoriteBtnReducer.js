export const toggleFavoriteBtnReducer = (state = 'favorite', action) => {
  switch(action.type) {
    case 'TOGGLE_BTN_STATUS':
      let toggle = action.btnStatus === 'favorite' ? 'showAll' : 'favorite';
      return toggle;
    default:
      return state;
  }
}