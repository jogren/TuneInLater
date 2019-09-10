import React from 'react';
import { shallow } from 'enzyme';
import CardDetails from './CardDetails';

describe('CardDetails', () => {
  let wrapper;
  const mockAudioBooks = [{
    artwork_url: 'http//:image.png',
    author_name: 'Dr. Seuss',
    book_name: 'The Cat in the Hat',
    description: 'Story Description',
  }];

  beforeEach(() => {
    wrapper = shallow(<CardDetails mockAudioBooks={mockAudioBooks}
    />)
  })

  it('should keep an up-to-date snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})