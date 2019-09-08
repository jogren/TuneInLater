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