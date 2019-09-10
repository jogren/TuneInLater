import { combineReducers } from 'redux';
import { selectCurrentUserReducer } from './selectCurrentUserReducer';
import { getAudiobooksReducer } from './getAudiobooksReducer';
import { toggleFavoriteReducer } from './toggleFavoriteReducer';
import { toggleFavoriteBtnReducer } from './toggleFavoriteBtnReducer';
import { hasErroredReducer } from './hasErroredReducer';
import { newUserErrorReducer } from './newUserErrorReducer';



const appReducer = combineReducers({
  selectCurrentUserReducer,
  getAudiobooksReducer,
  toggleFavoriteReducer,
  toggleFavoriteBtnReducer,
  hasErroredReducer,
  newUserErrorReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;

