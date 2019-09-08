import { combineReducers } from 'redux';
import { selectCurrentUserReducer } from './selectCurrentUserReducer';
import { getAudiobooksReducer } from './getAudiobooksReducer';
import { toggleFavoriteReducer } from './toggleFavoriteReducer';

const rootReducer = combineReducers({
  selectCurrentUserReducer,
  getAudiobooksReducer,
  toggleFavoriteReducer
});

export default rootReducer;


const appReducer = combineReducers({
  /* your app’s top-level reducers */
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}