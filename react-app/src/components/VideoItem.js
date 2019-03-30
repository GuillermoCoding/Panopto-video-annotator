import React from 'react';
import ReactPlayer from 'react-player';

import ld from 'lodash';


import VideoPlayer from './VideoPlayer';
import VideoNote from './VideoNote';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSeconds : 0,
      id: "2640eba4-ce5e-417b-841d-a9d60139fb02",
    }
  }

  handleClick(seconds, e) {
    e.preventDefault();
    console.log("CHanged"+seconds);
    this.setState({currentSeconds: seconds});
  }
  updateVideoTime(seconds, e) {
    e.preventDefault();
    console.log("Updating video time");
    this.setState({currentSeconds: seconds});
  }
  renderVideoNotes() {
    var items = ["1","2","3"];

    return (
      <div>
        test
      </div>
    )
  }
  render() {
    return (
      <div>
        <VideoPlayer src={"https://uva.hosted.panopto.com/Panopto/Pages/Embed.aspx?id="+this.state.id+"&start="+this.state.currentSeconds} />
        {this.renderVideoNotes}
      </div>

    );
  }
}

export default VideoItem;


