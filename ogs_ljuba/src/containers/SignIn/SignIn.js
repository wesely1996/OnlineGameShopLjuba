import React from 'react';

class SignIn extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
		}
	}

	onEmailChange = (event) =>{
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange = (event) =>{
		this.setState({signInPassword: event.target.value});
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-type':'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('main');
			}
		})
	}

	render(){
		const {onRouteChange} = this.props;
		return (
			<article className="w-30 center b--transparent br3 pa3 pa3-ns mv4 ba bw3 bg-black-40 shadow-3">
				<main className="pa4 white-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        onChange={this.onEmailChange} 
				        className="pa2 input-reset ba bg-white hover-bg-gray hover-black w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        onChange={this.onPasswordChange} 
				        className="b pa2 input-reset ba bg-white hover-bg-gray hover-black w-100" 
				        type="password" 
				        name="password"  
				        id="password"/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      onClick={this.onSubmitSignIn}
				      className="b ph3 pv2 input-reset white ba b--white bg-transparent grow pointer f6 dib" 
				      type="submit" 
				      value="Sign in"/>
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => onRouteChange('register')} 
				      className="f6 link dim white db pointer">Forgot your password?</p>
				    </div>
				  </div>
				</main>
			</article>
		);
	}

}

export default SignIn;
