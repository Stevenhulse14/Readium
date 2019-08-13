import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Stories = (props) => {
  const stories = props.match.params.authorId ? props.authorStories : props.allStories

  return (
    <div id='stories' className='column'>
      {
        stories.map(story => (
          <div className='story' key={story.id}>
            <Link to={`/stories/${story.id}`}>
              <h3>{story.title}</h3>
            </Link>
            <Link to={`/authors/${story.author.id}`}>
              <p>{story.author.name}</p>
            </Link>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allStories: state.stories,
    authorStories: state.singleAuthor.stories
  }
}

export default connect(mapStateToProps)(Stories)
