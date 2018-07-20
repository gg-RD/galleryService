import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: null
    }
    this.getOriginalData = this.getOriginalData.bind(this);
  }

  getOriginalData() {
  	axios.get('/AirJordan1').then( (response) => {
  		console.log(JSON.stringify(response));
  	}).catch( (error) => {
  		console.log(error);
  	})
  }

  render () {
    return (
    	<div>{this.getOriginalData()}</div>
    );
  }
}


ReactDOM.render(<Gallery />, document.getElementById('gallery'))