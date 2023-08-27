import { Component } from 'react';
import { CreateButtons } from './create-buttons/create-buttons';

export class ClassPlayingField extends Component {
	render() {
		return (
			<div className=" md:flex flex-row flex-wrap content-around justify-evenly w-1/3 h-1/2 text-center m-auto text-3xl mb-5">
				<CreateButtons />
			</div>
		);
	}
}
