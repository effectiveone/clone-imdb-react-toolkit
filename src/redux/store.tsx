import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import MovieReducer from "./reducers/movieSlice";
import favSlice from "./reducers/favSlice";
import rankSlice from "./reducers/rankSlice";

import languageSlice from "./reducers/languageSlice";
import appReducer from "./reducers/categorySlice";
import rootSaga from "./rootSaga";
import { combineReducers } from "redux";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  rank: rankSlice,
  language: languageSlice,
    category: appReducer,
  movie: MovieReducer,
  favorite: favSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);



export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
