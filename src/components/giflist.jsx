import React, { Component } from 'react'
import Gif from './gif.jsx'

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(({ id }) => {
      return <Gif id={id} key={id} updateSelectedGif={this.props.updateSelectedGif}/>
    })
  }

  render() {
    return (
      <div className="gif-list">
        { this.renderList() }
      </div>
    )
  }
}

export default GifList
