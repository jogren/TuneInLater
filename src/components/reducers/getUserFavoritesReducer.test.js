import { getUserFavorites } from './getUserFavoritesReducer';

describe('getUserFavoritesReducer', () => {
  it('should return state by default', () => {
    const mockState = ['book1']
    const mockActionObject = {
      type: undefined,
      audiobooks: ['book1', 'book2']
    }
    const expected = ['book1']

    expect(getUserFavorites(mockState, mockActionObject)).toEqual(expected)
  })

  it('should return allFavorites if action.type is GET_USER_FAVORITES', () => {
    const mockState = ['book1']
    const mockActionObject = {
      type: 'GET_USER_FAVORITES',
      allFavorites: ['book1', 'book2']
    }
    const expected = ['book1', 'book2']

    expect(getUserFavorites(mockState, mockActionObject)).toEqual(expected)
  })
})