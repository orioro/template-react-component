import React from 'react'
import { css, cx } from '@emotion/css'

export type ComponentNameProps = {
  className?: string
  someProp: string
}

export const ComponentName = ({
  className,
  someProp,
}: ComponentNameProps): React.ReactElement => {
  return (
    <div
      className={cx(
        className,
        css`
          background-color: hotpink;
          &:hover {
            color: white;
            cursor: pointer;
          }
        `
      )}>
      component-name: {someProp}
    </div>
  )
}
