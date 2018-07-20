import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Grid from './Components/grid.jsx';
import styled from 'styled-components';

import { Div } from './galleryStyle.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      images: []
    }
    this.shoe = 'null';
    this.image = [];

    this.getOriginalData = this.getOriginalData.bind(this);
  }

  getOriginalData() {
  	axios.get('/AirJordan1').then( (response) => {
      console.log(response.data.colors[0]);
      this.setState({name: response.data.name, images: response.data.colors[0] })
  	}).catch( (error) => {
  		console.log(error);
  	})
  }

  componentWillMount(){
    this.getOriginalData();
  }

  render () {
    return (
    	<Div className = 'grid'> {this.state.name}
        <Grid id = "top-left" pic={this.state.images.img1}/>
        <Grid id = "top-right" pic={this.state.images.vid} />
        <Grid id = "bottom-left" pic={this.state.images.img2} />
        <Grid id = "bottom-right" pic={this.state.images.img3} />
      </Div>

    );
  }
}


ReactDOM.render(<Gallery />, document.getElementById('gallery'))