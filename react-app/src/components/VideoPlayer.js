import React from 'react';


class VideoPlayer extends React.Component {
  render() {
    console.log("Video Player props");
    console.log(this.props);
    return (
      <div>
        <iframe width="420" height="345" src={this.props.src}/>
      </div>
    );
  }
}

export default VideoPlayer;
