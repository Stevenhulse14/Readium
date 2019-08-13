import React, { Component } from 'react'
import Comments from './Comments'
import { connect } from 'react-redux';
import { fetchSingleStory } from '../store/singleStory';

class SingleStory extends Component {

  componentDidMount () {
    try {
      this.props.loadSingleStory(this.props.match.params.storyId)
    }
    catch (error) {
      console.error(error)
    }
  }

  render () {
    const story = this.props.story
    const content = story.content || ''
    const comments = story.comments

    return (
      // <h1>hi</h1>
      <div id='single-story' className='column'>
        <h1>{story.title}</h1>
        {
          content.split('\n').map((line, idx) => <p key={idx}>{line}</p>)
        }
        <h3>Responses:</h3>
        <Comments comments={comments} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    story: state.singleStory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleStory: (id) => dispatch(fetchSingleStory(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStory)
