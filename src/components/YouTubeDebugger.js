  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  }