import React from 'react';
import WithCatRefresh from './WithCatRefresh';
import { CatImage } from './CatImage';
import { logout } from './apiCalls';

/**
 * Make and export a "RandomCat" component using CatImage and WithCatRefresh
 * to render an image of a cat with a refresh button.
 */

export default class RandomCat extends React.PureComponent {
  logOut = () => {
    const { logOut } = this.props;
    logout();
    logOut();
  }

  render() {
    const CatRefresh = WithCatRefresh(CatImage);
    return (
      <>
        <CatRefresh logOut={this.logOut} />
        <button type="button" onClick={this.logOut}>Logout</button>
      </>
    );
  }
}
