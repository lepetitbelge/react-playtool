import React, { Component } from 'react'
import giphy from 'giphy-api'

import SearchBar from './searchbar.jsx'
import Gif from './gif.jsx'
import GifList from './giflist.jsx'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: null
    }
  }

  search = (query) => {
    giphy('pZRDB5YIQH2nbYGvpBnaShEMIU6j4cmE').search({
      q: query,
      rating: 'g',
      limit: 16
    }, (err,res) => {
      this.setState({
        gifs: res.data
      })
    })
  }

  updateSelectedGif = (event) => {
    this.setState({
      selectedGifId: event.target.id
    })
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchGiphy={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateSelectedGif={this.updateSelectedGif}/>
        </div>
      </div>
    )
  }
}

export default App;
