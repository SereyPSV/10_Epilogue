import { ClassInput } from './player/player';
import { connect } from 'react-redux';
import { Component } from 'react';

export class ClassPlayerContainer extends Component {
	render() {
		return (
			<div className="md:flex flex-row flex-nowrap justify-around items-center w-7/12 m-auto text-2xl">
				<ClassInput color={'red'}>Player 1</ClassInput>

				<div
					className={`w-32 h-32 m-0 md:flex flex-col flex-nowrap justify-center items-center bg-purple-100 rounded-full text-4xl button ${
						this.props.playerN === 'X' ? 'color-red' : 'color-green'
					}`}
				>
					<p>Next</p>
					<p>{this.props.playerN}</p>
				</div>
				<ClassInput color={'green'}>Player 2</ClassInput>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		playerN: state.playerState,
	};
};
export const ClassPlayer = connect(mapStateToProps)(ClassPlayerContainer);
