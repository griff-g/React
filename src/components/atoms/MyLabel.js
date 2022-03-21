import React from 'react'
import './MyLabel.css'

const MyLabel = (props) => {
	return (
		<div>
			<span className="left-side">
				{props.name}
			</span> : 
			<span className="right-side">
				{props.phoneNumber}
			</span>
		</div>
	)
}

export default MyLabel