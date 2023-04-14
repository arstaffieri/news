import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./articleDetails.css"

export const ArticleDetails = ({articles}) => {
  const {id} = useParams()
  const [singleArticle, setSingleArticle] = useState({})

  useEffect(() => {
    setSingleArticle(articles.find(article => (id === article.created_date)))
  }, [])
  
  return (
    <div>
      <div className='details-container'>
        <h2>{singleArticle.title}</h2>
        <h3>{singleArticle.byline}</h3>
        <h4><a href={singleArticle.url} target="_blank">Read This Article</a></h4>
        <h4>Last updated: {singleArticle.updated_date}</h4>
        <h4>{singleArticle.abstract}</h4>
      </div>
    </div>
  )
}