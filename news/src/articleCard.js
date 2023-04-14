import React from 'react'
import {Link} from 'react-router-dom'
import "./articleCard.css"

export const ArticleCard = ({id, title, author}) => {
  return (
    <Link
    to={`/details/${id}`}
    className="article-details"
    >
      <div className='article-card' key={id}>
        <div className="card-info">
          <p>{title}</p>
          <p>{author}</p>
        </div>
      </div>
    </Link>
  )
}