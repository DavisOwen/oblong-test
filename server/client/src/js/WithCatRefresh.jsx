import React from 'react';
import { cat } from './apiCalls';

/**
 * Higher Order Components:
 * The idea here is to create a wrapper around a component that allows
 * you to add functionality to that component without modifying the
 * component directly.
 */

/**
 * @todo:
 * Add necessary functionality to this function to accomplish the following:
 * 1. When component mounts, it should automatically request a new cat image
 *    from the api.
 * 2. The url of the current cat image should be passed down to the component
 *    being wrapped.
 * 3. Render a refresh button below the component we are wrapping that fetches
      a new cat image on click.
 */
export default function WithCatRefresh(Component) {
  return class extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        url: '',
      };
    }

    componentDidMount() {
      this.getCat();
    }

    getCat = () => {
      const { logOut } = this.props;
      const response = cat();
      response.then((value) => {
        const url = value.replace(/"/g, '');
        this.setState({ url });
      }, () => {
        logOut();
      });
    }

    render() {
      const { url } = this.state;
      return (
        <>
          <Component url={url} height={500} width={500} />
          <button type="button" onClick={this.getCat}>Refresh</button>
        </>
      );
    }
  };
}
