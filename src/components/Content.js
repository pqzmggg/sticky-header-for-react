import React from "react";

class Content extends React.Component {
	render() {
		return (
			<li className="content">
				{this.props.content}
			</li>
		);
	}
}

export default Content;
