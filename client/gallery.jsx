import React from 'react';
import ReactDOM from 'react-dom';


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: null
    }
  }
  render () {
    return (<p> this should render once stuff is configured correctly </p>);
  }
}

window.Gallery = Gallery;
