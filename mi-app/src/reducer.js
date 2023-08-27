import { initialStateField } from './initial-state';

export const initialState = {
	field: initialStateField,
	player: 'X',
	won: initialStateField,
	message: '',
	none: 'none',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PLAYER_TURN': {
			return {
				...state,
				field: {
					...state.field,
					[`${action.payload}`]: state.player,
				},
				player: state.player === 'O' ? 'X' : 'O',
			};
		}

		case 'CLEAR_FIELD': {
			return {
				...state,
				field: {
					...state.field,
					...initialState.field,
				},
				player: 'X',
				won: {
					...state.won,
					...initialState.field,
				},
				message: '',
				none: 'none',
			};
		}

		case 'PLAYER_WON': {
			return {
				...state,
				field: {
					...state.field,
					[`${action.payload[0]}`]: action.payload[2],
				},
				won: {
					...state.won,
					...action.payload[1],
				},
				player: action.payload[2],
				message: `Player ${state.player === 'X' ? '1' : '2'} won!!!`,
				none: 'flex',
			};
		}
		case 'NOBODY_WON': {
			return {
				...state,
				field: {
					...state.field,
					[`${action.payload}`]: state.player,
				},
				message: `Nobody won!!!`,
				none: 'flex',
			};
		}

		default:
			return state;
	}
};
