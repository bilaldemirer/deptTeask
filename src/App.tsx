import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Banner, Cases, Clients, Header } from './components';
import { Helmet } from "react-helmet";


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
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Bilal Demirer" />
        <title>Dept Task</title>
        <link rel="canonical" href="https://www.deptagency.com/" />
      </Helmet>
      <Banner>
        <Header />
      </Banner>
      <Cases />
      <Clients />
    </>
  );
}

export default App;
