import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Comments = (props) => {
  const comments = props.comments || []

  return (
    <div id='comments'>
      {
        comments.map(comment => (
          <div className='comment row' key={comment.id}>
            <img src={comment.author.imageUrl} />
            <div className='column'>
              <Link to={`/authors/${comment.author.id}`}>
                <h5>{comment.author.name}</h5>
              </Link>
              <div>{comment.content}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    comments: state.singleAuthor.comments
  }
}

export default connect(mapStateToProps)(Comments)
