import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../images/white_logo.png'
import './NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.handleNavbarClick = this.handleNavbarClick.bind(this);
    this.handleBrandClick = this.handleBrandClick.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    //this.handleActiveButton = this.handleActiveButton.bind(this);
  
    this.routes = props.routes;

    const complete_path = window.location.pathname
    const first_slash_index = complete_path.indexOf('/')
    const second_slash_index = complete_path.indexOf('/', first_slash_index + 1)
    const current_path = second_slash_index === -1
      ? complete_path.substring(0, complete_path.length)
      : complete_path.substring(0, second_slash_index)
    this.state = {
      active_button: current_path
    }
  }

  handleNavbarClick(index) {
    this.setState((state) => ({
      active_button: index,
    }))
    window.scrollTo(0, 0)
  }

  closeNavbar() {
    const navbarCollapseDiv = document.getElementById('basic-navbar-nav');
    const navbarIsNotCollapsed = navbarCollapseDiv.classList.contains('show');

    if (navbarIsNotCollapsed) {
      navbarCollapseDiv.classList.remove('show');
    }
  }

  /*
    TODO: Handle Active Tabs on brand Click
  handleActiveButton() {
    const activeTabs = 
      document.getElementById('navbar-container').getElementsByClassName('active');
    if (activeTabs[1]) {
      activeTabs[1].classList.remove('active');
    }
  }*/

  handleBrandClick() {
    // Collapsing the Navbar on small view
    this.closeNavbar();
  }

  getClassName(path) {
    return `navbar-btn${(path === this.state.active_button) ? ' active' : ''}`
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        id="app-navbar"
      >
        <Navbar.Brand
          as={ Link }
          to='/'
          onClick={() =>{
            this.handleBrandClick()
            this.handleNavbarClick('/')
          }}
        >
          <img
            id="navbar-logo"
            src={logo}
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' expanded ='false'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav id='navbar-container' className='mr-auto'>

            {this.routes.map((route, index) => (
              <Nav.Link
                eventKey={ index }
                key={ index }
                className={ this.getClassName(route.path) }
                as={ Link }
                to={ route.path }
                onClick={() =>{
                  this.handleNavbarClick(route.path)
                }}
              >
                <div className="navbar-btn-legend">
                  { route.legend }
                </div>
              </Nav.Link>
            ))}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
