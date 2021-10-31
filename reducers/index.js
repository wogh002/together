import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
// import post from './post';
const rootReducer = (state, action) => {
    // SSR 시 action.type은 HYDRATE 된다.
    // 그 외의 경우는 default 로 빠짐.
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                user,
                // post
            });
            return combineReducer(state, action);
        }
    }
};
export default rootReducer;