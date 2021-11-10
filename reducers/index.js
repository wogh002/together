import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
// import post from './post';
import zone from './zone';
const rootReducer = (state, action) => {
    // const getServerSideProps = wrapper.getServerSideProps(
    // 위에 서버사이드 프롭스 실행시키고, 결과는 HYDRATE 로 간다
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                user,
                zone
            });
            return combineReducer(state, action);
        }
    }
};
export default rootReducer;