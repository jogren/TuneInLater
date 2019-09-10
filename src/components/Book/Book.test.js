import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

describe('Book', () => {
  let wrapper;
  const mockToggleFavorite = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Book
      key={1}
      book_name='The Cat in the Hat'
      book_id={1}
      author_name='Dr. Seuss'
      artwork_url='http//:image.png'
      toggleFavorite={mockToggleFavorite}
      favorite={false}
      description='Story Description'
      primary_genre_name='children'
      release_date='04/23/1990'
    />)
  })

  it('should keep an up-to-date snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
