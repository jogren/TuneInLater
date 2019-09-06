
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
       genre: book.primaryGenreName,
       favorite: false,
       id: Date.now()
     }))
   } catch(error) {
     throw new Error(error.message);
   }
 },

   async createNewUser(userInfo) {
    const url = 'http://localhost:3001/api/v1/users'
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('There was an error getting your data');
      }
      const user = await response.json()
      console.log(user)
    } catch(error) {
      throw new Error(error.message);
    }
  },

  async logIn(userInfo) {
    const url = 'http://localhost:3001/api/v1/login'
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('There was an error getting your data');
      }
      const user = await response.json()
      console.log(user)
      return user
    } catch(error) {
      throw new Error(error.message);
    }
  }

}

export default api
