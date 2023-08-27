export const playerReducer = (state = 'X', action) => {
	switch (action.type) {
		case 'PLAYER_TURN': {
			return state === 'O' ? 'X' : 'O';
		}

		case 'CLEAR_FIELD': {
			return 'X';
		}

		case 'PLAYER_WON': {
			return action.payload[2];
		}

		default:
			return state;
	}
};
