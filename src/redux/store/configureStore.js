import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import appReducers from "redux/reducers/appReducers";
import { createStore, applyMiddleware, compose } from "redux";
import { createReducerManager } from "redux/reducers/reducerManager";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export const history = createBrowserHistory();

function sendErrorReport(error) {}

export default function configureStore() {
  const reduxSagaMonitorOptions = {
    onError: (error) => {
      sendErrorReport(error);
      throw error;
    },
  };

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const reducerManager = createReducerManager(appReducers, history);

  const store = createStore(
    reducerManager.reduce,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(),
        reduxImmutableStateInvariant()
      )
    )
  );
  store.reducerManager = reducerManager;
  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry
  return store;
}
