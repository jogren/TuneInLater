import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

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
    this.props.createNewUser(userObject)
  }

  structureLoginUserObject = () => {
    const { loginEmail, loginPassword } = this.state;
    const userObject = {
      email: loginEmail,
      password: loginPassword
    }
    this.props.loginUser(userObject)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    console.log(this.props)
    const { createName, createEmail, createPassword, loginEmail, loginPassword } = this.state;
    return (
    <div className="big-container">
      <header>
        <h1>Tune-In-Later</h1>
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
              type="text"
              placeholder="Password"
              name="createPassword"
              value={createPassword}
              onChange={(e) => this.handleChange(e)}
            />
          <button className="create-account-button" onClick={(e) => this.structureUserObject(e)}>Create Account</button>
          </form>
        </article>
        <h4 className="or">OR</h4>
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
              type="text"
              placeholder="Password"
              name="loginPassword"
              value={loginPassword}
              onChange={(e) => this.handleChange(e)}
            />
            <NavLink to='/'>
              <button className="login-button" onClick={() => this.structureLoginUserObject()}>Login</button>
            </NavLink>
          </form>
        </article>
      </section>
    </div>
    )
  }
}

export default Login;
