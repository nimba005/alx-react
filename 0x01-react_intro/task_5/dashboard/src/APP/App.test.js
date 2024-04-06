import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });
});