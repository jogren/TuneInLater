import { getAudiobooksReducer } from './getAudiobooksReducer';

describe('getAudiobooksReducer', () => {
  it('should return state by default', () => {
    const mockState = ['book1']
    const mockActionObject = {
      type: undefined,
      audiobooks: ['book1', 'book2']
    }
    const expected = ['book1']

    expect(getAudiobooksReducer(mockState, mockActionObject)).toEqual(expected)
  })

  it('should return audiobooks if action.type is GET_AUDIOBOOKS', () => {
    const mockState = ['book1']
    const mockActionObject = {
      type: 'GET_AUDIOBOOKS',
      audiobooks: ['book1', 'book2']
    }
    const expected = ['book1', 'book2']

    expect(getAudiobooksReducer(mockState, mockActionObject)).toEqual(expected)

  })
})