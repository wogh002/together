import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import zone from './zone';
const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                user,
                post,
                zone
            });
            console.log(state);
            console.log("---------------------------");
            console.log(action);
            return combineReducer(state, action);
        }
    }
};
export default rootReducer;