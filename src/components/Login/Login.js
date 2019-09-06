import React, { Component } from 'react';

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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    console.log(this.props, 'login')
    const { createName, createEmail, createPassword, loginEmail, loginPassword } = this.state;
    return (
      <section>
        <article>
          <h4>Create An Account</h4>
          <form>
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
          <button onClick={(e) => this.structureUserObject(e)}>Create Account</button>
          </form>
        </article>
        <article>
          <h4>Login</h4>
          <form>
            <input
              type="text"
              placeholder="Email"
              name="loginEmail"
              value={loginEmail}
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="text"
              placeholder="Password"
              name="loginPassword"
              value={loginPassword}
              onChange={(e) => this.handleChange(e)}
            />
            <button>Create Account</button>
          </form>
        </article>
      </section>
    )
  }
}

export default Login;
