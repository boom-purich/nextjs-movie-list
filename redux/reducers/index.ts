import { combineReducers } from 'redux';
import user from './users';

const rootReducer = combineReducers({
    user:user,
});

export default rootReducer;