import { connect } from 'react-redux';
import { CLEAR_FIELD } from '../../actions';
import { Component } from 'react';

export class ClassFooterContainer extends Component {
	constructor(props) {
		super(props);
		this.showNone = props.showNone;
		// this.messageResult = props.messageResult;
	}
	render() {
		return (
			<>
				<button
					className="relative z-20 w-60 h-20 bg-purple-100 text-fuchsia-700 button "
					onClick={this.props.onClearField.bind(this)}
				>
					Start Game!
				</button>
				<div
					className="z-10 absolute w-full h-full top-0 justify-center items-center text-9xl text-fuchsia-700 text-shadow"
					style={{ display: `${this.props.showNone}` }}
				>
					{this.props.messageResult}
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		showNone: state.noneState,
		messageResult: state.messageState,
	};
};

const mapDispatchToProps = (dispatch) => ({
	onClearField: () => dispatch(CLEAR_FIELD),
});

export const Footer = connect(mapStateToProps, mapDispatchToProps)(ClassFooterContainer);
