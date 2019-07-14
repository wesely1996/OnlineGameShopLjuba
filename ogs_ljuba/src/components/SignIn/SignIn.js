import React from 'react';

const SignIn = () =>{
	return (
		<article className="w-30 center b--transparent br3 pa3 pa3-ns mv4 ba b--black-10 shadow-3">
			<main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
			    </div>
			    <div className="lh-copy mt3">
			      <a href="#0" className="f6 link dim black db">Sign up</a>
			      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
			    </div>
			  </form>
			</main>
		</article>
	);
}

export default SignIn;