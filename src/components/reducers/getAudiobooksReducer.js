export const getAudiobooksReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_AUDIOBOOKS':
      return action.audiobooks;
    default:
      return state;
  }
}