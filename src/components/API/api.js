
const api = {

 async getAudio(text) {

  const url = `https://itunes.apple.com/search?term=${text}&media=audiobook&lang`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('There was an error getting your data');
    }
    const audiobooks = await response.json();
    console.log(text)
    return audiobooks.results.map(book => ({
      author: book.artistName,
      art: book.artworkUrl100,
      bookName: book.collectionName,
      description: book.description,
      genre: book.primaryGenreName
    }))
  } catch(error) {
    throw new Error(error.message);
  }
}

}

export default api
