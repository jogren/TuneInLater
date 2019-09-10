export const selectCurrentUser = userObj => ({
  type: 'SELECT_CURRENT_USER',
  userObj
});

export const getAudiobooks = audiobooks => ({
  type: 'GET_AUDIOBOOKS',
  audiobooks
});

export const toggleFavoriteBook = favorites => ({
  type: 'TOGGLE_FAVORITE',
  favorites
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});

export const getUserFavorites = (allFavorites) => ({
  type: 'GET_USER_FAVORITES',
  allFavorites
});

export const toggleBtnStatus = btnStatus => ({
  type: 'TOGGLE_BTN_STATUS',
  btnStatus
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
})

export const newUserError = errorMsg => ({
  type: 'NEW_USER_ERROR',
  errorMsg
})