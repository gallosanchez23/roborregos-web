// @flow
import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../images/white_logo.png'
import './NavBar.css'

type RouteType = {
  path: string,
  legend: string,
  component: string
};

type Props = {
  routes: Array<RouteType>
};

type State = {
  active_button: string
};

class NavBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // this.handleActiveButton = this.handleActiveButton.bind(this);

    const complete_path = window.location.pathname
    const first_slash_index = complete_path.indexOf('/')
    const second_slash_index = complete_path.indexOf('/', first_slash_index + 1)
    const current_path = second_slash_index === -1
      ? complete_path.substring(0, complete_path.length)
      : complete_path.substring(0, second_slash_index)
    this.state = {
      active_button: current_path,
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
  } */

  getClassName(path: string) {
    const { active_button } = this.state
    return `navbar-btn${(path === active_button) ? ' active' : ''}`
  }

  closeNavbar = () => {
    const navbarCollapseDiv = document.getElementById('basic-navbar-nav')
    if (navbarCollapseDiv != null) {
      const navbarIsNotCollapsed = navbarCollapseDiv.classList.contains('show')

      if (navbarIsNotCollapsed) {
        navbarCollapseDiv.classList.remove('show')
      }
    }
  }

  handleBrandClick = () => {
    // Collapsing the Navbar on small view
    this.closeNavbar()
  }

  handleNavbarClick = (index: string) => {
    this.setState({ active_button: index })
    window.scrollTo(0, 0)
  }

  render() {
    const { routes } = this.props

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
          as={Link}
          to="/"
          onClick={() => {
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" expanded="false" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="navbar-container" className="mr-auto">

            {routes.map((route: RouteType, index: number) => (
              <Nav.Link
                eventKey={index}
                key={index}
                className={this.getClassName(route.path)}
                as={Link}
                to={route.path}
                onClick={() => {
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
