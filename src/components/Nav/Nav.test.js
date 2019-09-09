import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav'; 

describe('Nav', () => {
  let wrapper;
  const mockNewSearch = jest.fn();
  const mockCurrentUser = {
    id: 3,
    name: "bill",
    email: "bill@gmail.com"
  }
  const mockFetchFavorites = jest.fn();
  let mockFavoriteBtnStatus = 'favorite'
  const mockLogoutUser = jest.fn();
  const mockToggleBtnStatus= jest.fn();


  beforeEach(() => {
    wrapper = shallow(<Nav 
      newSearch={mockNewSearch}
      currentUser={mockCurrentUser}
      fetchUserFavorites={mockFetchFavorites}
      toggleFavoriteBtnReducer={mockFavoriteBtnStatus}
      logoutUser={mockLogoutUser}
      toggleBtnStatus={mockToggleBtnStatus}
    />)
  })

  it('should update search state onChange of input', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'Harry Potter', name: 'search' } });
    expect(wrapper.state('search')).toEqual('Harry Potter')
  })

  it('should invoke newSearch on click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockNewSearch).toHaveBeenCalled();
  })

  it('should invoke toggleBtnStatus and fetchUserFavorites when helper method is called', () => {
    wrapper.instance().helperFunction();
    expect(mockToggleBtnStatus).toHaveBeenCalledWith(mockFavoriteBtnStatus)
    expect(mockFetchFavorites).toHaveBeenCalledWith(3)
  })
})