import React, { Component } from "react"
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <p className="footer">
        <a href="mailto:soliditybyexample@gmail.com">
          soliditybyexample@gmail.com
        </a>{" "}
        |{" "}
        <a href="https://github.com/solidity-by-example/solidity-by-example.github.io">
          source
        </a>{" "}
        |{" "}
        <a href="https://github.com/solidity-by-example/solidity-by-example.github.io/tree/gh-pages#license">
          license
        </a>
      </p>
    )
  }
}

export default Footer
