import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css'
import headphones from './headphones.svg'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createName: '',
      createEmail: '',
      createPassword: '',
      loginEmail: '',
      loginPassword: ''
    }
  }

  structureUserObject = (e) => {
    e.preventDefault();
    const { createName, createEmail, createPassword} = this.state;
    const userObject = {
      name: createName,
      email: createEmail,
      password: createPassword
    }
    this.setState({
      createName: '',
      createEmail: '',
      createPassword: ''
    })
    this.props.createNewUser(userObject)
  }

  structureLoginUserObject = (e) => {
    e.preventDefault();
    const { loginEmail, loginPassword } = this.state;
    const userObject = {
      email: loginEmail,
      password: loginPassword
    }
    this.setState({ 
      loginEmail: '',
      loginPassword: ''
     })
    this.props.loginUser(userObject)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { createName, createEmail, createPassword, loginEmail, loginPassword } = this.state;
    return (
    <div className="big-container">
      <header>
        <img alt="headphones" src={headphones}></img>
        <h1 className="title">TuneInLater</h1>
  
      </header>
      <section className="account-container">
        <article className="create-account-container">
          <h4>Create An Account</h4>
          <form className="create-account-form">
            <input
              type="text"
              placeholder="Name"
              name="createName"
              value={createName}
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="text"
              placeholder="Email"
              name="createEmail"
              value={createEmail}
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              name="createPassword"
              value={createPassword}
              onChange={(e) => this.handleChange(e)}
            />
              <button className="create-account-button" disabled={!createName || !createEmail || !createPassword} onClick={(e) => this.structureUserObject(e)}>Create Account</button>
          {this.props.newUserErrorReducer && <p>This account already exists. Please login!</p>}
          </form>
        </article>
        <h4 className="or"></h4>
        <article className="login-container">
          <h4>Login</h4>
          <form className="login-form">
            <input
            className="login-email"
              type="text"
              placeholder="Email"
              name="loginEmail"
              value={loginEmail}
              onChange={(e) => this.handleChange(e)}
            />
            <input
            className="login-password"
              type="password"
              placeholder="Password"
              name="loginPassword"
              value={loginPassword}
              onChange={(e) => this.handleChange(e)}
            />
              <button className="login-button" disabled={!loginEmail || !loginPassword} onClick={(e) => this.structureLoginUserObject(e)}>Login</button>
              {this.props.hasErroredReducer && <p>Please enter a valid email and password</p>}
          </form>
        </article>
      </section>
    </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  hasErroredReducer: state.hasErroredReducer,
  newUserErrorReducer: state.newUserErrorReducer
})

export default connect(mapStateToProps)(Login);
