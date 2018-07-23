import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StyledGrid from './Components/grid.jsx';
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
    //need to change based off shoe
  	axios.get('/flyknit').then( (response) => {
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
      <div className = 'grid'>
      	<Div className = 'row1'>
          <StyledGrid id = "top-left" pic={this.state.images.img1}/>
          <StyledGrid id = "top-right" pic= {this.state.images.img2} />
        </Div>
        <Div className = 'row2'>
          <StyledGrid id = "bottom-left" pic={this.state.images.img3} />
          <StyledGrid id = "bottom-right" pic={this.state.images.img4} />
        </Div>
      </div>

    );
  }
}


ReactDOM.render(<Gallery />, document.getElementById('gallery'))