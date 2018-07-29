import React from 'react';
import styled from 'styled-components';

function Table (props) {

	return (
		<div>	

			<span> 
				<Img className = 'tablePos0' src={props.images[0]} onClick= { (e)=> props.mother.setState({galleryPics: props.mother.state.images[0]}) }/>
				<Img src={props.images[1]} onClick= { (e)=> props.mother.setState({galleryPics: props.mother.state.images[1]}) }/>
				<Img src={props.images[2]} onClick= { (e)=> props.mother.setState({galleryPics: props.mother.state.images[2]}) }/>
				<Img src={props.images[3]} onClick= { (e)=> props.mother.setState({galleryPics: props.mother.state.images[3]}) }/>
				<Img src={props.images[4]} onClick= { (e)=> props.mother.setState({galleryPics: props.mother.state.images[4]}) }/>
			</span>
		</div>
	);

}

const Img = styled.img `

	  border-style: none;
	  padding: 2px;
	  height: 50px;
	  width: 50px;
`

export default Table;
// in between the span tags --> trying to use loop to create img tab (current code below has bug)

// {props.images.map( (image,index)=> 
// 					<Img src={image} 
// 						onClick={ (e)=> props.mother.setState({galleryPics: props.mother.state.images[index]}) } />)}