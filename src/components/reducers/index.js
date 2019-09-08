import { combineReducers } from 'redux';
import { selectCurrentUserReducer } from './selectCurrentUserReducer';
import { getAudiobooksReducer } from './getAudiobooksReducer';
import { toggleFavoriteReducer } from './toggleFavoriteReducer';

const appReducer = combineReducers({
  selectCurrentUserReducer,
  getAudiobooksReducer,
  toggleFavoriteReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;

