import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

function NewContract(props) {
  return (
    <Example
      title="Contract that Create other Contracts"
      description="Learn how to create new contract from inside a contract with Solidity"
      html={html}
    />
  )
}

export default NewContract
