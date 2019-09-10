import { selectCurrentUserReducer } from './selectCurrentUserReducer';

describe('selectCurrentUserReducer', () => {
  it('should return state by default', () => {
    const mockState = { id: 1, name: 'Jacob' }
    const mockActionObject = {
      type: undefined,
      userObj: { id: 2, name: 'Alek' }
    }
    const expected = { id: 1, name: 'Jacob' }

    expect(selectCurrentUserReducer(mockState, mockActionObject)).toEqual(expected)
  })

  it('should return allFavorites if action.type is GET_USER_FAVORITES', () => {
    const mockState = { id: 1, name: 'Jacob' }
    const mockActionObject = {
      type: 'SELECT_CURRENT_USER',
      userObj: { id: 2, name: 'Alek' }
    }
    const expected = { id: 2, name: 'Alek' }

    expect(selectCurrentUserReducer(mockState, mockActionObject)).toEqual(expected)
  })
})