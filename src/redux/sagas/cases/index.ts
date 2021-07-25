import { take, call, put } from 'redux-saga/effects';

// actions
import ACTION_TYPE from '../../actions/cases';
import { REQUEST, SUCCESS, FAILURE } from '../../actions/action-type.util';

// services
import { caseServices } from '../../services';


export function* getCaseSaga() {
  while (true) {
    try {
      // take action
      yield take(REQUEST(ACTION_TYPE.GET_CASES));

      // service call
      const { data } = yield call([
        caseServices,
        caseServices.getCase
      ]);

      // change state
      yield put({
        type: SUCCESS(ACTION_TYPE.GET_CASES),
        payload: { data }
      });
    } catch (error) {
      yield put({
        type: FAILURE(ACTION_TYPE.GET_CASES),
        payload: error.message
      });
    }
  }
}

