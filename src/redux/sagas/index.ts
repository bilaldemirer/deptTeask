import { fork, all } from 'redux-saga/effects';

import {
  getCaseSaga,
} from './cases';


export default function* root() {
  yield all([
    fork(getCaseSaga)
  ]);
}
