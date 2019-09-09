import { selectCurrentUser, getAudiobooks, toggleFavoriteBook, logoutUser, getUserFavorites, toggleBtnStatus } from './index.js';

describe('actions', () => {
  it('should return a selectCurrentUser action object', () => {
    const mockUserObj = {
      id: 1, 
      name: 'Jacob',
    }
    const expected = {
      type: 'SELECT_CURRENT_USER',
      userObj: mockUserObj
    }

    expect(selectCurrentUser(mockUserObj)).toEqual(expected)
  })

  it('should return a getAudiobooks action object', () => {
    const mockAudiobooks = ['book1', 'book2']
    const expected = {
      type: 'GET_AUDIOBOOKS',
      audiobooks: mockAudiobooks
    }

    expect(getAudiobooks(mockAudiobooks)).toEqual(expected)
  })

  it('should return a toggleFavoriteBook action object', () => {
    const mockFavorites = ['favorite1', 'favorite2']
    const expected = {
      type: 'TOGGLE_FAVORITE',
      favorites: mockFavorites
    }

    expect(toggleFavoriteBook(mockFavorites)).toEqual(expected)
  })
})