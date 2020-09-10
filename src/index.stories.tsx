import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { ComponentName } from '../src/index'

export default {
  title: 'ComponentName',
  component: ComponentName
}

export const Case1 = () => {
  return <ComponentName someProp='test prop' />
}
