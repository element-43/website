import { combineReducers } from 'redux';

// Reducers.
import ApplicationReducer from './ApplicationReducer';
import SessionReducer from './SessionReducer';

/**
 * Combine the reducers and map them to lowercase.
 */
export default combineReducers({
    application: ApplicationReducer,
    session: SessionReducer
});
