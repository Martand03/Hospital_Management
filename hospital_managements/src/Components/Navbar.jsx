import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import logo from './logo.png';
import "./Navbarstyle.css";
import { MenuItems } from './MenuItems'; 

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className='NavbarItems'>
        <div className='logo-container'>
          <img src={logo} alt='Logo' className='logo-image' />
          <h1 className='navbar-logo'>LIFECARE HOSPITAL</h1>
        </div>
        <div className='menu-icons' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  <i className={items.icon}></i>
                  {items.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
