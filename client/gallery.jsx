import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Grid from './Components/grid.jsx';
import Table from './Components/table.jsx';
import styled from 'styled-components';

import { Div, TablePos } from './galleryStyle.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      galleryPics: [],
      images: [],
      value: 0
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
  	});

  }

  create_table() {
    for(var i = 0 ; i < this.state.images.length; i++){
      this.table.push(this.state.images[i].img1);
    }
  }

  componentWillMount(){
    this.getOriginalData();
  }

  render () {
    return (
      <Div className = 'grid'>

        	<div className = 'row1'>
            <Grid id = "top-left" pic={this.state.galleryPics.img1} />
            <Grid id = "top-right" pic= {this.state.galleryPics.img2} />
          </div>

          <div className = 'row2'>
            <Grid id = "bottom-left" pic={this.state.galleryPics.img3} />
            <Grid id = "bottom-right" pic={this.state.galleryPics.img4} />
          </div>


      <TablePos className = 'table' create_table = {this.create_table()}>
        <Table className = 'tableComp' images = {this.table} mother ={this}/>
      </TablePos>

    </Div>


    );
  }
}

export default Gallery;
