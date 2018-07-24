import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StyledGrid from './Components/grid.jsx';
import Table from './Components/table.jsx';
import styled from 'styled-components';

import { Div } from './galleryStyle.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      galleryPics: [],
      images: []
    }
    this.table = [];

    this.getOriginalData = this.getOriginalData.bind(this);
    this.create_table = this.create_table.bind(this);
  }

  getOriginalData() {
    //need to change based off shoe
  	axios.get('/flyknit').then( (response) => {
      this.setState({name: response.data.name, galleryPics: response.data.colors[0], images: response.data.colors})
  	}).catch( (error) => {
  		console.log(error);
  	})
  }

  create_table() {
    for(var i = 0 ; i < this.state.images.length; i++){
      this.table.push(this.state.images[i].img1);
    }
    console.log(this.table);
  }

  componentWillMount(){
    this.getOriginalData();
  }

  render () {
    return (
      <div className = 'grid'>

      	<Div className = 'row1'>
          <StyledGrid id = "top-left" pic={this.state.galleryPics.img1} />
          <StyledGrid id = "top-right" pic= {this.state.galleryPics.img2} />
        </Div>
        <Div className = 'row2'>
          <StyledGrid id = "bottom-left" pic={this.state.galleryPics.img3} />
          <StyledGrid id = "bottom-right" pic={this.state.galleryPics.img4} />
        </Div>

      <div className = 'table' create_table = {this.create_table()}>
        <Table images = {this.table}/>
      </div>

      </div>

    );
  }
}


ReactDOM.render(<Gallery />, document.getElementById('gallery'))