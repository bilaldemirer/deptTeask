import { REQUEST } from '../action-type.util';

const ACTION_TYPE = {
  GET_CASES: 'cases/GET_CASES'
};



export function getCases(dispatch: any) {
  dispatch({
    type: REQUEST(ACTION_TYPE.GET_CASES)
  });
}


export default ACTION_TYPE;
