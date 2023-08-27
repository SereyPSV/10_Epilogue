import { initialStateField } from '../initial-state';

export const fieldReducer = (state = initialStateField, action) => {
	switch (action.type) {
		case 'PLAYER_TURN': {
			return {
				...state,
				[action.payload[0]]: action.payload[1],
			};
		}

		case 'CLEAR_FIELD': {
			return {
				...state,
				...initialStateField,
			};
		}

		case 'PLAYER_WON': {
			return {
				...state,
				[action.payload[0]]: action.payload[2],
			};
		}

		default:
			return state;
	}
};

//[`${action.payload[0]}`]: action.payload[1] -> [action.payload[0]]: action.payload[1]
