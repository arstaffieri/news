export const getArticles = (category) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.REACT_APP_MY_KEY}`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status}`)
      }
      return response.json()
    })
  }