import React from 'react';
import api from './api';

describe('fetchAudio', () => {
  let audiobooks;
  beforeEach(() => {
    audiobooks = [
      {
        id: 1,
        book_name: 'Harry Potter and the Sorcerer\'s Stone'
      },
      {
        id: 2,
        book_name: 'Harry Potter and the Chamber of Secrets'
      }
    ]
  });

  it('should invoke fetch with a specific URL', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(audiobooks)
      });
    });
    api.fetchAudio('harry');
    expect(fetch).toHaveBeenCalledWith(`https://itunes.apple.com/search?term=harry&media=audiobook&lang`);
  });

  it('should return an array of audiobooks based on the input text', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(audiobooks)
      })
    });
    expect(api.fetchAudio('harry')).resolves.toEqual(audiobooks);
  });

  it('should throw an error with the response is not ok (SAD)', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(api.fetchAudio('harry')).rejects.toEqual(Error('There was an error getting your data'));
  });

  it('should return catch error if promise rejects (SAD)', () => {
    fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down'
      })
    });
    expect(api.fetchAudio('harry')).rejects.toEqual(Error('Server is down'));
  });
});


