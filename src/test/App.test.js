const expect = require('chai').expect;

import App from '../components/App';
const wrapper = shallow(<App />);

describe('hello-world', () => {
    it('should work', () => {
        expect(true).to.be.true;
    });
});

describe('Testing App Component<App/>', () => {
    it('renders h1', () => {
        expect(wrapper.find('h1').text()).equal('Welcome to React');
    });
    it('renders p', () => {
        expect(wrapper.find('p').text()).equal('Get started');
    });
});