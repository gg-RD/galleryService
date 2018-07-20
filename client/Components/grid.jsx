import React from 'react';
import axios from 'axios';

class Grid extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<img src ={this.props.pic} />
		);
	}
}

export default Grid;
