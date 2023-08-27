import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { playerTurn, playerWon, nobodyWon } from '../../../actions';
import { TicTacToeLogic } from '../../../utils';

export class ClassCreateButtonsContainer extends Component {
	constructor(props) {
		super(props);
		//buttons, buttonsWon, playerN, dispatch
		console.log('1', props);
	}
	prov(item) {
		const gameResult = TicTacToeLogic({
			...this.props.buttons,
			[item.target.id]: this.props.playerN,
		});
		const fullField = Object.values({
			...this.props.buttons,
			[item.target.id]: this.props.playerN,
		}).some((i) => i === '');

		if (gameResult) {
			return playerWon([item.target.id, gameResult, this.props.playerN]);
		}

		if (!fullField) {
			return nobodyWon(item.target.id);
		}

		if (item.target.textContent === '') {
			return playerTurn([item.target.id, this.props.playerN]);
		}
	}

	onPlayerTurn(item) {
		console.log('res', this.prov(item));
		this.props.dispatch(this.prov(item));
	}
	render() {
		return (
			<Fragment>
				{Object.keys(this.props.buttons).map((item) => (
					<div
						className={`md:flex flex-row justify-center items-center text-8xl bg-purple-100 border-spacing-2 button ${this.props.buttonsWon[item]}`}
						style={
							this.props.buttons[item] === 'X'
								? { color: 'red' }
								: { color: 'green' }
						}
						key={item}
						id={item}
						onClick={this.onPlayerTurn.bind(this)}
					>
						{this.props.buttons[item]}
					</div>
				))}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		buttons: state.fieldState,
		buttonsWon: state.wonState,
		playerN: state.playerState,
	};
};

export const CreateButtons = connect(mapStateToProps)(ClassCreateButtonsContainer);
