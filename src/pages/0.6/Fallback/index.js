import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function(props) {
  return (
    <Example
      title="Fallback"
      description="Example of how to use fallback in Solidity"
      html={html}
    />
  )
}
