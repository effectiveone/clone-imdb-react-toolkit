import { all } from "redux-saga/effects";
import { moviesSagas } from "./movieSagas";
import favSlice from "./reducers/favSlice";
import rankSlice from "./reducers/rankSlice";



export default function* rootSaga() {
  yield all([...moviesSagas,  favSlice, rankSlice]);
}
