import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Clients from './Clients';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
        <Clients />
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
