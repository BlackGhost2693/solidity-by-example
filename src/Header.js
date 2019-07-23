import React, { Component } from "react"
import "./Header.css"
import logo from "./logo.svg"

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <a href="/">
          <img src={logo} alt="logo" className="Header-logo" />
        </a>

        <h3>
          <a href="/">Solidity by Example</a>
          <div style={{ color: "lightgrey" }}>version 0.5.1</div>
        </h3>
      </div>
    )
  }
}

export default Header
