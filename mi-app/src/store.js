import { createStore, combineReducers } from 'redux';
import {
	fieldReducer,
	playerReducer,
	wonReducer,
	messageReducer,
	noneReducer,
} from './reducers';

const reducer = combineReducers({
	fieldState: fieldReducer,
	messageState: messageReducer,
	noneState: noneReducer,
	playerState: playerReducer,
	wonState: wonReducer,
});

export const store = createStore(reducer);
