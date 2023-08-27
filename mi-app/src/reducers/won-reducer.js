import { initialStateField } from '../initial-state';

export const wonReducer = (state = initialStateField, action) => {
	switch (action.type) {
		case 'CLEAR_FIELD': {
			return {
				...state,
				...initialStateField,
			};
		}

		case 'PLAYER_WON': {
			return {
				...state,
				...action.payload[1],
			};
		}

		default:
			return state;
	}
};
