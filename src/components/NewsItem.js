import React from 'react'

const NewsItem = ({
  datetime,
  headline,
  source,
  url,
  summary
}) => {
  const timestamp = new Date(datetime).toLocaleString()
  return (
    <div>
      <a href={url} target="_blank"> <h3>{ headline }</h3> </a>
      <div>
        Source: <em>{ source }</em>, 
        { timestamp }
      </div>
      <div>
        <p>
          { summary }
        </p>
      </div>
    </div>
  )
}

export default NewsItem