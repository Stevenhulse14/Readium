import React from 'react'
import {Route} from 'react-router-dom'
import Navbar from './Navbar'

import Stories from './Stories'
import Authors from './Authors'
import SingleStory from './SingleStory'
import SingleAuthor from './SingleAuthor'

import { connect } from 'react-redux';
import {fetchStories} from '../store/stories'
import {fetchAuthors} from '../store/authors'


class Main extends React.Component {
  componentDidMount() {
    this.props.loadStories()
    this.props.loadAuthors()
  }

  render () {
    return (
      <div id='main'>
        <div className='column container'>
          <div id='header'>
            <h1>Readium</h1>
          </div>
          <Navbar />
        </div>
        <Route exact path='/stories' component={Stories} />
        <Route exact path='/authors' component={Authors} />
        <Route path='/stories/:storyId' component={SingleStory} />
        <Route path='/authors/:authorId' component={SingleAuthor} />
        <Route exact path='/' component={Stories} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadStories: () => dispatch(fetchStories()),
    loadAuthors: () => dispatch(fetchAuthors())
  }
}

export default connect(null, mapDispatchToProps)(Main)
