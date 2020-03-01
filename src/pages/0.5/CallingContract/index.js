import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"

function CallingContract(props) {
  return (
    <Example
      title="Calling Other Contract"
      description="In Solidity, contract can call other contracts in several ways."
      html={html}
    />
  )
}

export default CallingContract
