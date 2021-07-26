import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Header from './Header';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
        <Header />
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
