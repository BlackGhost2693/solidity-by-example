import React from "react"
import { shallow } from "enzyme"
import Super from "./index"

test("it renders", () => {
  const component = shallow(<Super />)

  expect(component).toMatchSnapshot()
})
