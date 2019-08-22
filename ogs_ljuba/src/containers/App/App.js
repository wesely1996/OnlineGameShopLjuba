import React, { Component } from 'react';
import update from 'react-addons-update';
import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';
import CardHolder from '../../components/CardHolder/CardHolder';
import CardHolderCart from '../../components/CardHolder/CardHolderCart';
import Scroll from '../../components/Scroll/Scroll';
import SignIn from '../SignIn/SignIn';
import Registration from '../Registration/Registration';
import {Games} from '../../props/Games.js';
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
				id: '',
				name: '',
				email: '',
				orders: [],
			}
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount(){
		this.setState({games: Games});

		this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
	}

	loadUser = (data) =>{
		this.setState({user: {
			id: data.id,
			name: data.name,
			email: data.email,
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

	onRouteChange = (route) => {
		if(route === 'singout'){
			this.setState({route: 'signin', isSignedIn: false});
		}
		else{
			this.setState({route: route});
			if(route === 'main' && !this.state.isSignedIn){
				this.setState({isSignedIn: true});
			}
		}
	}

	onOrderAdded = (orderid) =>{
		fetch('http://localhost:3000/order', {
			method: 'put',
			headers: {'Content-type':'application/json'},
			body: JSON.stringify({
				userId: this.state.user.id,
				orderId: orderid
			})
		})
		.then(response => response.json())
		.then(orders => {
			this.setState({
			  user: update(this.state.user, {orders: {$set: orders}})
			})
		})
	}

	onOrderRemoved = (orderid) =>{
		fetch('http://localhost:3000/cart', {
			method: 'put',
			headers: {'Content-type':'application/json'},
			body: JSON.stringify({
				userId: this.state.user.id,
				orderId: orderid
			})
		})
		.then(response => response.json())
		.then(orders => {
			this.setState({
			  user: update(this.state.user, {orders: {$set: orders}})
			})
		})
	}

	render(){
		const {games, searchfield, height, route, isSignedIn, user} = this.state;

		const filteredGames = games.filter(game =>{
			return game.gameName.toLowerCase().includes(searchfield.toLowerCase());
		})

		const filetrGamesInCart = games.filter(game =>{
			return user.orders.includes(game.id);
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
			    		<h1 className="f1 b ma5 pa5 tc navy grow" style={{textShadow: 'gray 2px 0 10px'}}>
					      	LOADING
					    </h1> :
					    <Scroll height={height}>
					      	<CardHolder Games={filteredGames} OrderAction={this.onOrderAdded}/>
					    </Scroll>
			    	}
			    </div> : 
			    route === 'cart' ?
			    <div>
			    	{
			    		!games.length ?
			    		<h1 className="f1 b ma5 pa5 tc navy grow" style={{textShadow: 'gray 2px 0 10px'}}>
					      	LOADING
					    </h1> :
					    <Scroll height={height + 75}>
					      	<CardHolderCart Games={filetrGamesInCart} OrderAction={this.onOrderRemoved}/>
					    </Scroll>
			    	}
			    </div> :
			    <h1 className="f1 b ma5 pa5 tc red grow" style={{textShadow: 'gray 2px 0 10px'}}>
			    	!UNKNOWN ROUTE!
			    </h1>
		      }
		      <div className="ma1 pa1" style={{fontSize:'10px', height: "15px", display: 'flex', flexDirectino: 'row', justifyContent: 'center'}}>
		      	<img src="/images/copyright.png" alt="c" style={{height: '7px'}}/> 
		      	<div className="tc">Copyright 2019 <span className="red b"> N&T</span></div>
	      	  </div>
		    </div>
		);
	}
}

export default App;
