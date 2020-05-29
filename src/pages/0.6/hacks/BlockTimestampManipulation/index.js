import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Block Timestamp Manipulation"
      version={SOL_VERSION}
      description="An example of a Solidity contract vulnerable to block timestamp manipulation"
      html={html}
    />
  )
}
