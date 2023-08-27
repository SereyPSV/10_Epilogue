import { ClassHeader, ClassPlayingField, Footer } from './components';
import { Component } from 'react';

export class ClassApp extends Component {
	render() {
		return (
			<div
				className="text-center text-4xl bg-purple-950"
				style={{ height: `${window.screen.height}px` }}
			>
				<ClassHeader />
				<ClassPlayingField />
				<Footer />
			</div>
		);
	}
}
