import React from 'react'
import { render } from 'react-dom'
import ComponentName from '../../src'

render(
	<ComponentName someProp='some-value' />,
	document.getElementById('root')
)
