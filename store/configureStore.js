import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import rootSaga from '../sagas';
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const logger = createLogger();
    const middlewares = [sagaMiddleware, logger];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(sagaMiddleware))
        : composeWithDevTools(
            applyMiddleware(...middlewares),
        );
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};
const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });
export default wrapper;