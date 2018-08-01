import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


function Grid (props){
	return(
			<Img src ={props.pic} />
		);
}

 const Img = styled.img `
	  border-style: none;
	  padding: 5px;
	  height: 350px;
	  width: 250px;
`

export default Grid;
