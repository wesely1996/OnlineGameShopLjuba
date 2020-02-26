import React from 'react';

const Cart = ({onRouteChange}) => {
	return(
		<div className="ma2">
			<button
			onClick={() => onRouteChange('cart')}
			type="button" 
			className="b--transparent br-pill bg-black-60 grow">
				<img alt={'CART'} src={'/images/cart.png'} style={{width: 45, height: 45, minWidth: 25, minHeight: 25}}/>
			</button>
		</div>
	);
}

export default Cart;