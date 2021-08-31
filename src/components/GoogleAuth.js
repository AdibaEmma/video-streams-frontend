import React, { Component } from 'react'
import { connect } from 'react-redux';
import history from '../history';

import { signIn, signOut } from '../actions';
export class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '365238918096-8hv1cujnrgktkgq20a1a79u26uoc9et9.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth  = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen( this.onAuthChange);
            });
        });
    }

    onAuthChange = ( isSignedIn ) => {
        if( isSignedIn ) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
            history.push('/')
        }
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
        if( this.props.isSignedIn === null ) { 
            return null;
        } else if (this.props.isSignedIn) {
            return <div><button className="ui red google button" onClick={ this.onSignOutClick}>
            <i className="google icon"></i>
            Sign Out</button></div>
        } else {
            return <div><button className="ui blue google button" onClick={ this.onSignInClick}>
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

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
