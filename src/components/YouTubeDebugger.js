import React, { Component } from "react";

export default class YouTubeDebugger extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    }
  }

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        birate: 12,
        video: {
          resolution: "720p"
        }
      }
    });
  }

  render()
  {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}