export const noneReducer = (state = 'none', action) => {
	switch (action.type) {
		case 'CLEAR_FIELD': {
			return 'none';
		}
		case 'PLAYER_WON': {
			return 'flex';
		}
		case 'NOBODY_WON': {
			return 'flex';
		}
		default:
			return state;
	}
};
