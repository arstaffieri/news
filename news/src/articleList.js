import React from 'react'
import { ArticleCard } from './articleCard'
import "./articleList.css"

export const ArticlesList = ({articles, viewArticleDetails}) => {
  const eachArticle = articles.map(article => {
    return (
      <ArticleCard
        id={article.created_date}
        title={article.title}
        author={article.byline}
        viewArticleDetails={viewArticleDetails}
      />
    )
  })

  return (
    <div>
      <div className="article-container">
        {eachArticle}
      </div>
    </div>
    
  )
}
