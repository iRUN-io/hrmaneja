import { combineReducers } from 'redux';

import consumerUser from './consumerReducer';


export default combineReducers({
    user : consumerUser,
    
});

