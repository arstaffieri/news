import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import { ArticlesList } from './articleList.js'
import { ArticleDetails } from './articleDetails.js'
import { NavBar } from './nav.js'
import "./App.css"
import { getArticles } from './apiCalls.js'

const App = () => {
  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState("home")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  
  useEffect(()=> {
    fetchArticles()
  }, [category])
 
  const fetchArticles = async () => {
    try {
      setLoading(true)
      const articleResult = await getArticles(category)
      setArticles(articleResult.results)
    }
    catch(error) {
      setError('Oops, something went wrong. Please try again later.')
    }
    finally {setLoading(false)}
  }
 
  return (
    <div>
     <NavBar category={category} setCategory={setCategory} />
      {!loading ? 
      <Routes>
        <Route exact path="/" element={<ArticlesList articles={articles} setArticles={setArticles} />} />
        <Route path="/:category" element={<ArticlesList articles={articles} />} />
        <Route path="/details/:id" element={<ArticleDetails articles={articles} />} />
      </Routes> 
      : <div>Loading...</div>}
    </div>
  )
}

export default App