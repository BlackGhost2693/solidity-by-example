import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function (props) {
  return (
    <Example
      title="Honeypot"
      description="An example of honeypot in Solidity"
      html={html}
    />
  )
}
