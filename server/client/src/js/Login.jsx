import React from 'react';
import { login } from './apiCalls';

/**
 * Make and export an "App" component that renders a form that sends a request
 * for authentication with username and password.
 * (hint you may need a callback prop for the response)
 */

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: false,
    };
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    const { username, password } = this.state;
    const payload = { username, password };
    const response = login(payload);
    const { logIn } = this.props;
    response.then(() => {
      logIn();
    }, (reject) => {
      if (reject === 403) {
        logIn();
      } else {
        this.setState({ error: true });
      }
    });
    event.preventDefault();
  }

  render() {
    const { username, password, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter Username" value={username} onChange={this.changeUsername} required />
        <input type="password" placeholder="Enter Password" value={password} onChange={this.changePassword} required />
        <input type="submit" value="Login" />
        {error && <p style={{ color: 'red' }}>Login Failed</p>}
      </form>
    );
  }
}
