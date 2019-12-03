import React from "react";
import './Header.scss'

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fixed: this.props.fixed,
		};
	}

	render() {
		const fixed = this.state.fixed;

		// 아래 헤더가 겹치게 될 때 고정 헤더가 밀려올라가는 효과를 주기 위함
		const style = {
			top: this.props.offsetFixedHeader ? (this.props.offsetFixedHeader * -1) + "px" : "auto"
		};

		return (
			<div id={this.props.id} className={`header${fixed ? " fixed" : ""}`} style={style}>
				{this.props.title}
			</div>
		);
	}
}

export default Header;
