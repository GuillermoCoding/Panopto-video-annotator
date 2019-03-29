import React from 'react';
import ReactPlayer from 'react-player';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSeconds : 0
    }
  }

  handleClick(seconds, e) {
    e.preventDefault();
    console.log("CHanged"+seconds);
    this.setState({currentSeconds: seconds});
  }

  render() {
    console.log("render ==== "+this.state.currentSeconds);
 
    return (
      <div>
        <iframe width="420" height="345" src={"https://uva.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=2640eba4-ce5e-417b-841d-a9d60139fb02&start="+this.state.currentSeconds}>
</iframe>
      <a href="#" onClick={this.handleClick.bind(this, 123)}>123 seconds</a>
      <a href="#" onClick={this.handleClick.bind(this, 200)}>200 seconds</a>
      </div>

    );
  }
}

export default VideoItem;


