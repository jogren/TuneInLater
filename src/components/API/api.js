
const api = {

 async getAudio(text) {

  const url = `https://itunes.apple.com/search?term=${text}&media=audiobook`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('There was an error getting your data');
    }
    const audiobooks = await response.json();
    console.log(text)
    return audiobooks.results
  } catch(error) {
    throw new Error(error.message);
  }
}

}

export default api
