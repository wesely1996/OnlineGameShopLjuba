import React from 'react';
import './Cart.css';

const Cart = ({onRouteChange}) => {
	return(
		<div className="ma2">
			<button
			onClick={() => onRouteChange('cart')}
			type="button" 
			className="b--transparent br-pill cart grow">
				<img alt={'CART'} src={'/images/cart.png'} style={{width: 25, height: 25, minWidth: 25}}/>
			</button>
		</div>
	);
}

export default Cart;