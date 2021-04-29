import React from 'react'

export type ComponentNameProps = {
  someProp: string
}

export const ComponentName = ({
  someProp,
}: ComponentNameProps): React.ReactElement => {
  return <div>component-name: {someProp}</div>
}
