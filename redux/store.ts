import { createStore } from 'redux';
import rootReducer from 'redux/reducers';

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState> 

export default store;