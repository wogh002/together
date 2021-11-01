import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'; //사가 생성 할 수 있는 라이브러리.
import { createWrapper } from 'next-redux-wrapper';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import rootSaga from '../sagas';
const configureStore = () => {
    // 1.사가생성
    const sagaMiddleware = createSagaMiddleware();
    // 2.액션 상태 보여주는 logger (디버깅 편리).
    const logger = createLogger();
    const middlewares = [sagaMiddleware, logger];
    // 3. enhancer (확장기능이라고 생각하면 편함)
    // https://lunit.gitbook.io/redux-in-korean/api/compose
    const enhancer = process.env.NODE_ENV === 'production'
        // 배포모드 라면 ↓
        ? compose(applyMiddleware(sagaMiddleware))
        // 개발모드 라면 ↓
        // https://react.vlpt.us/redux-middleware/03-logger-and-devtools.html
        : composeWithDevTools(
            applyMiddleware(...middlewares),
        );
    const store = createStore(reducer, enhancer);
    // 사가 (미들웨어) - 실행
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};
//createWrapper(store,config: { debug: boolean });
// process.env.NODE_ENV === 'development' 개발모드라면 --> true
//즉 debug 하겠다.
// false 면 디버그 안하겠다는 의미. 
// false 일 경우는 배포모드 production
const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });
// wrapper 를 만든이유 ? wrapper.withRedux(최상위 컴포넌트)); 컴포넌트를 감싸고 있기때문에  하위컴포넌트(개별 페이지) 마다 SSR을 적용가능한것.
export default wrapper;