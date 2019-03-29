import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import VideoItem from './components/VideoItem';
import ImageUpload from './components/ImageUpload';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VideoItem/>
        <ImageUpload/>

      </div>
    );
  }
}

export default App;
