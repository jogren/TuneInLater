import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  let wrapper;
  const mockSelectUser = jest.fn();
  const mockGetAudio = jest.fn();
  const mockToggleFavorite = jest.fn();
  const mockGetUserFavofites = jest.fn();
  const mockCurrentUser = { 
    id: 3, 
    name: "bill", 
    email: "bill@gmail.com" 
  }
  const mockAudioBooks = [
    {
      artwork_url: 'http//:image.png',
      author_name: 'Dr. Seuss',
      book_id: 1,
      book_name: 'The Cat in the Hat',
      description: 'Story Description',
      favorite: true,
      primary_genre_name: 'children',
      release_date: '04/23/1990'
    },
    {
      artwork_url: 'http//:image.png',
      author_name: 'Dr. Seuss',
      book_id: 2,
      book_name: 'Green Eggs & Ham',
      description: 'Story Description',
      favorite: false,
      primary_genre_name: 'children',
      release_date: '04/23/1990'
    }
  ]
  const mockFavoriteBooks = [
    {
      artwork_url: 'http//:image.png',
      author_name: 'Dr. Seuss',
      book_id: 1,
      book_name: 'The Cat in the Hat',
      description: 'Story Description',
      favorite: false,
      primary_genre_name: 'children',
      release_date: '04/23/1990'
    }
  ]

  beforeEach(() => {
    wrapper = shallow(<App 
      selectCurrentUserReducer={mockCurrentUser}
      getAudiobooksReducer={mockAudioBooks}
      favoritesReducer={mockFavoriteBooks}
      selectCurrentUser={mockSelectUser}
      getAudiobooks={mockGetAudio}
      toggleFavoriteBook={mockToggleFavorite}
      getUserFavorites={mockGetUserFavofites}
    />)
  })

  it('should take a snapshot when passed the correct data', () => {
    expect(wrapper).toMatchSnapshot();
  })
})