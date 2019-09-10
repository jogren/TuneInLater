import React from 'react';
import { shallow } from 'enzyme';
import BookContainer from './BookContainer';

describe('BookContainer', () => {
  let wrapper;
  const mockAudioBooks = [{
    artwork_url: 'http//:image.png',
    author_name: 'Dr. Seuss',
    book_id: 1,
    book_name: 'The Cat in the Hat',
    description: 'Story Description',
    favorite: true,
    primary_genre_name: 'children',
    release_date: '04/23/1990'
  }];
  const mockToggleFavorite = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<BookContainer 
      audiobooks={mockAudioBooks}
      toggleFavorite={mockToggleFavorite}
    />)
  })

  it('should keep an up-to-date snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
