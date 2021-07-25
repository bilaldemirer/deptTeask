import { FAILURE, REQUEST, SUCCESS } from '../../actions/action-type.util';
import ACTION_TYPE from '../../actions/cases';
import { CaseReducerType } from '../types';

const initialState: CaseReducerType = {
  cases: [],
  error: '',
  isLoading: false
};

export default function caseReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case REQUEST(ACTION_TYPE.GET_CASES):
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case SUCCESS(ACTION_TYPE.GET_CASES):
      return {
        ...state,
        cases: action.payload.data,
        error: null,
        isLoading: false
      };
    case FAILURE(ACTION_TYPE.GET_CASES):
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
