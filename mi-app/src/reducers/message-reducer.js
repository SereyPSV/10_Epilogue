export const messageReducer = (state = '', action) => {
	switch (action.type) {
		case 'CLEAR_FIELD': {
			return '';
		}
		case 'PLAYER_WON': {
			return `Player ${action.payload[2] === 'X' ? '1' : '2'} won!!!`;
		}
		case 'NOBODY_WON': {
			return `Nobody won!!!`;
		}
		default:
			return state;
	}
};
