import { Component } from 'react';
import { ClassPlayer } from './players/players';

export class ClassHeader extends Component {
	render() {
		return (
			<>
				<label className="color-red">Tic Tac Toe</label>
				<ClassPlayer />
			</>
		);
	}
}
