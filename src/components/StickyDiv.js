import React from "react";
import Header from "./Header";
import Content from "./Content";
import "./StickyDiv.scss";

class StickyDiv extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data,  // 리스트에 출력할 데이터
			fixedHeaderIdx: 0,  // 스크롤 상태 기준으로 고정할 헤더의 index
			offsetFixedHeader: 0  // 고정 헤더가 밀려나는 효과를 위한 offsetTop 수치
		};
	}

	// each문에서 사용되는 key 생성 함수
	genHeaderKey(idx) {
		return `header_${idx}`;
	}
	genContentsKey(idx) {
		return `contents_${idx}`;
	}
	genContentKey(h_idx, c_idx) {
		return `content_${h_idx}_${c_idx}`;
	}

	// 스크롤 발생 시 헤더의 위치에 따라 고정 헤더와 offset값을 계산함
	handleScroll() {
		const scrollTop = this.scroll.scrollTop;
		const currentHeader = document.getElementById(this.genHeaderKey(this.state.fixedHeaderIdx));
		const nextHeader = document.getElementById(this.genHeaderKey(this.state.fixedHeaderIdx+1));

		// 스크롤 상태에 따라 고정된 헤더를 특정한다.
		let fixedHeaderIdx = this.state.fixedHeaderIdx;
		let offsetFixedHeader = 0;
		if(currentHeader) {
			if(currentHeader.offsetTop - scrollTop > 0) {
				fixedHeaderIdx = this.state.fixedHeaderIdx - 1;
			}
		}
		if(currentHeader && nextHeader) {
			const offset = nextHeader.offsetTop - scrollTop;
			if(offset <= 0) {
				fixedHeaderIdx = this.state.fixedHeaderIdx + 1;
			} else if(offset < 30) {
				// 다음 헤더가 고정 헤더와 겹치게 되면 고정 헤더의 top을 조정하여 밀어내는 효과를 표현한다.
				offsetFixedHeader = currentHeader.offsetHeight - offset;
			}
		}

		if(fixedHeaderIdx === -1) {
			fixedHeaderIdx = 0;
		}

		// 값이 변경되면 state를 갱신한다.
		if(this.state.fixedHeaderIdx !== fixedHeaderIdx || this.state.offsetFixedHeader !== offsetFixedHeader) {
			this.setState({
				fixedHeaderIdx: fixedHeaderIdx,
				offsetFixedHeader: offsetFixedHeader
			});
		}
	}

	render() {
		console.log(this.state.fixedHeaderIdx);

		const fixedHeaderIdx = this.state.fixedHeaderIdx;  // 고정 헤더 index
		const data = this.props.data;  // 리스트에 출력할 데이

		// 출력될 elements
		let fixedHeader = null;
		const items = [];

		// 출력할 elements 생성
		data.forEach((item, h_idx) => {
			// 고정될 헤더 >> 리스트 내 헤더가 올라오면 새로운 내용으로 교체된다.
			if(h_idx === fixedHeaderIdx) {
				fixedHeader = (
					<Header
						id="fixed_header"
						key={this.genHeaderKey(h_idx)}
						title={item.header.title}
						fixed={true}
						offsetFixedHeader={this.state.offsetFixedHeader} />
				);
			}

			// 리스트 내 출력될 header(고정되지 않음)
			items.push(
				<Header
					id={this.genHeaderKey(h_idx)}
					key={this.genHeaderKey(h_idx)}
					title={item.header.title}
					fixed={false} />
			);

			// 리스트 내 출력될 content
			items.push(
				<ul id={this.genContentsKey(h_idx)} key={this.genContentsKey(h_idx)} className="contents">
					{item.contents.map((content, c_idx) => {
						return <Content key={this.genContentKey(h_idx, c_idx)} content={content} />;
					})}
				</ul>
			);
		});

		return (
			<div className="sticky-wrapper">
				<div className="sticky-scroll" onScroll={this.handleScroll.bind(this)} ref={(ref) => {this.scroll = ref}}>
					{fixedHeader}
					{items}
				</div>
			</div>
		);
	}
}

export default StickyDiv;
