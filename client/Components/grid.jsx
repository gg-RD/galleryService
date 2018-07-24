import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Grid extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Img src ={this.props.pic} />
		);
	}
}

const Img = styled.img `
	  border-style: none;
	  padding: 5px;
	  height: 350px;
	  width: 250px;
`

export default Grid;
