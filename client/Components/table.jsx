import React from 'react';
import styled from 'styled-components';

function Table (props) {

	return (
		<div>
			<span>
				<Img src={props.images[0]} />
				<Img src={props.images[1]} />
				<Img src={props.images[2]} />
				<Img src={props.images[3]} />
			</span>
		</div>
	);

}

const Img = styled.img `

	  border-style: solid;
	  height: 50px;
	  width: 50px;
`

export default Table;