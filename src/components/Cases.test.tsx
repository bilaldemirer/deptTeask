import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Cases from './Cases';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
        <Cases />
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
