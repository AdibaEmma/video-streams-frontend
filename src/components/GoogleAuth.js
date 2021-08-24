import React, { Component } from 'react'

export class GoogleAuth extends Component {
    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '365238918096-8hv1cujnrgktkgq20a1a79u26uoc9et9.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth  = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen( this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignInClick = (e) => {
        e.preventDefault();
        this.auth.signIn()
    }

    onSignOutClick = (e) => {
        e.preventDefault();
        this.auth.signOut()
    }

    renderAuthButton() {
        if( this.state.isSignedIn === null ) { 
            return null;
        } else if (this.state.isSignedIn) {
            return <div><button className="ui red google button" onClick={ this.onSignOut}>
            <i className="google icon"></i>
            Sign Out  </button></div>
        } else {
            return <div><button className="ui blue google button" onClick={ this.onSignIn}>
            <i className="google icon"></i>
            Sign in with Google</button></div>
        }
    }

    render() {
        return (
            <div>
                { this.renderAuthButton() }
            </div>
        )
    }
}

export default GoogleAuth
