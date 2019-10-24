import React, { Component } from 'react';
import update from 'react-addons-update';
import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';
import CardHolder from '../../components/Holders/CardHolder';
import Scroll from '../../components/Scroll/Scroll';
import SignIn from '../SignIn/SignIn';
import Registration from '../Registration/Registration';
import ConfirmationButton from '../../components/CartConfirmButton/ConfirmationButton';
import OrderHolder from '../../components/Holders/OrderHolder';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			games: [],
			searchfield: '',
			height: 450,
			route: 'signin',
			isSignedIn: false,
			user: {
				id: {},
				name: '',
				email: '',
				cart: [],
				orders: [],
			}
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	//get all games and place them in an array
	getGames = () => {
		fetch('http://localhost:3000/games', {
			method: 'get',
			headers: {'Content-type':'application/json'},
		})
		.then(response => response.json())
		.then(Games => {
			this.setState({games: Games});
		})
	}

	componentDidMount(){
		this.getGames();

		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions.bind(this));
	}
	//set new data for the user
	loadUser = (data) =>{
		this.setState({user: {
			id: data.id,
			name: data.name,
			email: data.email,
			cart: data.cart,
			orders: data.orders,
		}});
	}

	componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({height: window.innerHeight });
    }

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}
	//route manager
	onRouteChange = (route) => {
		if(route === 'singout'){
			this.setState({route: 'signin', isSignedIn: false, user: {id: {}, name: '', email: '', cart: [], orders: []}});
		}
		else{
			this.setState({route: route});
			if(route === 'main' && !this.state.isSignedIn){
				this.setState({isSignedIn: true});
			}
		}
	}
	//move items from cart to orders
	moveToOrders = () =>{
		fetch('http://localhost:3000/order', {
			method: 'put',
			headers: {'Content-type':'application/json'},
			body: JSON.stringify({
				userId: this.state.user.id
			})
		})
		.then(response => response.json())
		.then(orders => {
			this.setState({
			  user: update(this.state.user, {cart: {$set: []}, orders: {$set: orders.sort()}})
			})
			console.log(this.state.user)
		})
	}

	onOrderAdded = (orderid) =>{
		fetch('http://localhost:3000/addToCart', {
			method: 'put',
			headers: {'Content-type':'application/json'},
			body: JSON.stringify({
				userId: this.state.user.id,
				orderId: orderid
			})
		})
		.then(response => response.json())
		.then(cart => {
			this.setState({
			  user: update(this.state.user, {cart: {$set: cart.sort()}})
			})
			console.log(this.state.user)
		})
	}

	onOrderRemoved = (orderid) =>{
		fetch('http://localhost:3000/cancelItem', {
			method: 'put',
			headers: {'Content-type':'application/json'},
			body: JSON.stringify({
				userId: this.state.user.id,
				orderId: orderid
			})
		})
		.then(response => response.json())
		.then(cart => {
			this.setState({
			  user: update(this.state.user, {cart: {$set: cart.sort()}})
			})
			console.log(this.state.user)
		})
	}

	render(){
		const {games, searchfield, height, route, isSignedIn, user} = this.state;

		const filteredGames = games.filter(game =>{
			return game.gameName.toLowerCase().includes(searchfield.toLowerCase());
		})

		const filetrGamesInCart = games.filter(game =>{
			return user.cart.includes(game._id);
		})

		return (
			<div className="App">
		      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} route={route}/>
		      {
			    route === 'register' ?
			    <Registration onRouteChange = {this.onRouteChange} loadUser={this.loadUser}/> :
			    route === 'signin' ?
			    <SignIn onRouteChange = {this.onRouteChange} loadUser={this.loadUser}/> :
			    route === 'main' ?
			    <div>
			    	<Search searchChange={this.onSearchChange}/>
			    	{
			    		!games.length ?
			    		<h1 className="f1 b ma5 pa5 tc red grow" style={{textShadow: 'gray 2px 0 10px'}}>
					      	LOADING
					    </h1> :
					    <Scroll height={height}>
					      	<CardHolder Games={filteredGames} OrderAction={this.onOrderAdded} route={route}/>
					    </Scroll>
			    	}
			    </div> : 
			    route === 'cart' ?
			    <div>
			    	{
			    		!games.length ?
			    		<h1 className="f1 b ma5 pa5 tc red grow" style={{textShadow: 'gray 2px 0 10px'}}>
					      	LOADING
					    </h1> :
					    <div>
						    <Scroll height={height}>
						      	<CardHolder Games={filetrGamesInCart} OrderAction={this.onOrderRemoved} route={route}/>
						    </Scroll>
						    <ConfirmationButton OrderAction={this.moveToOrders}/>
					    </div>
			    	}
				</div> :
				route === 'userPage'?
				<div>
					{
			    		!games.length ?
			    		<h1 className="f1 b ma5 pa5 tc red grow" style={{textShadow: 'gray 2px 0 10px'}}>
					      	LOADING
					    </h1> :
					    <div>
							<Search searchChange={this.onSearchChange}/>
						    <Scroll height={height}>
								<OrderHolder Orders={user.orders}/>
						    </Scroll>
					    </div>
			    	}
				</div> :
			    <h1 className="f1 b ma5 pa5 tc red grow" style={{textShadow: 'gray 2px 0 10px'}}>
			    	!UNKNOWN ROUTE!
			    </h1>
		      }
		      <div className="ma1 pa1" style={{fontSize:'10px', height: "20px", display: 'flex', justifyContent: 'center'}}>
				  <div className = "bg-black" style={{display: 'flex', flexDirectino: 'row'}}>
				  	<img src="/images/copyright.png" alt="c" style={{height: '7px'}}/> 
		      		<div className="white">Copyright 2019 <span className="red b"> N&T</span></div>
				  </div>
	      	  </div>
		    </div>
		);
	}
}

export default App;
