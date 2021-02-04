import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/splash-page.css';
import SearchBarContainer from '../search/search_bar_container';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/ShoppingCart'}>Cart</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="authentication">
                <Link to={'/login'}>Login</Link>
                <>or</>
                <Link to={'/signup'}>Signup</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className='header'>
            <Link to={'/'} className="brand-name" >CYMS</Link>
            <SearchBarContainer />
            { this.getLinks() }
        </div>
      );
  }
}

export default MainPage;