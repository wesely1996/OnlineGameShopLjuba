import React from 'react';

const PopUp = ({message}) =>{
	return (
		<div className = "b-100 ma0 mt0 green f1"
        style={{position:"absolute", top:"45%", left:"45%"}}>
			message
		</div>
	);
}

export default PopUp;