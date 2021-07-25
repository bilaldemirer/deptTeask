import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  getCases
} from './redux/actions/cases';
import { CaseModel, SelectorType } from './redux/reducers/types';

type SelectedType = {
  cases: CaseModel[];
};

function App() {

  const dispatch = useDispatch();

  const { cases } = useSelector<
    SelectorType,
    SelectedType
  >(state => ({
    cases: state.caseReducer.cases
  }));


  console.log('cases: ', cases);

  useEffect(() => {
    getCases(dispatch);
  }, [dispatch]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
