import React from 'react'

import { Story } from '@storybook/react'

import { ComponentName, ComponentNameProps } from '../src/index'

export default {
  title: 'ComponentName',
  component: ComponentName,
}

const Case1Template: Story<ComponentNameProps> = (props) => (
  <ComponentName {...props} />
)

export const Case1 = Case1Template.bind({})

Case1.args = {
  someProp: 'test prop value',
}
