import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Grid from './Components/grid.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hi'
    }
    this.shoe = 'null';
    this.image = [];

    this.getOriginalData = this.getOriginalData.bind(this);
  }

  getOriginalData() {
  	axios.get('/AirJordan1').then( (response) => {
      console.log(response.data)
      this.setState({name: response.data.name})
  	}).catch( (error) => {
  		console.log(error);
  	})
  }
  componentDidMount(){
    this.getOriginalData();
  }

  render () {
    return (
    	<div id = 'grid'>{this.state.name}
        <Grid /> 
      
      </div>

    );
  }
}


ReactDOM.render(<Gallery />, document.getElementById('gallery'))