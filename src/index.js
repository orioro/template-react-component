import React from 'react'

class ComponentName extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>component-name: {this.props.someProp}</div>
	}
}

export default ComponentName
