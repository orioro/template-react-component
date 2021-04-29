import React from 'react'

import { ComponentName } from '../src/index'

export default {
  title: 'ComponentName',
  component: ComponentName,
}

export const Case1 = (): React.ReactElement => {
  return <ComponentName someProp='test prop' />
}
