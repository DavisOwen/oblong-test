import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import RandomCat from './RandomCat';
import '../css/random-cat.scss';

/**
 * Build an App component that renders the Login component when the user is
 * unauthenticated and the RandomCat component when the user is authenticated.
 */

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: localStorage.getItem('authenticated') || false,
    };
  }

  logIn = () => {
    this.setState({ authenticated: true });
    localStorage.setItem('authenticated', true);
  };

  render() {
    const { authenticated } = this.state;
    const renderedComponent = authenticated
      ? <RandomCat />
      : <Login logIn={this.logIn} />;
    return renderedComponent;
  }
}

/** NOTHING TO DO BELOW THIS POINT */
ReactDOM.render(
  <App />,
  document.getElementById('mount'),
);
