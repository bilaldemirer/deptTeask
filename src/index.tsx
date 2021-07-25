import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store, persistor } from './redux/store';

const Root = ({ store }: any) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

require('dotenv').config();
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
