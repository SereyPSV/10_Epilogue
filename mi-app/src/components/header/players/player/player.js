import { Component } from 'react';

export class ClassInput extends Component {
	constructor(props) {
		super(props);
		this.content = props.children;
	}
	render() {
		return (
			<div className="md:flex flex-col flex-wrap items-center">
				<input
					className={` font-['Chakra_Petch'] font-medium text-3xl w-3/5 rounded-3xl text-center mb-4 border-solid border-8 bg-purple-100 color-${this.props.color} button`}
					defaultValue={this.content}
				></input>
				<div
					className={`w-28 h-28 rounded-full text-7xl p-1 bg-purple-100 color-${this.props.color} button`}
				>
					{this.content === 'Player 1' ? 'X' : 'O'}
				</div>
			</div>
		);
	}
}
