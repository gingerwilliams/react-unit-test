## Enzyme 
Enzyme expects an adapter to be configured. To configure an adapter, youshould call `Enzyme.configure({ adapter: new Adapter() })` before using any of Enzyme's top level APIs, where `Adapter` is the adapter corresponding to the library currently being tested.

For example:     
import Adapter from 'enzyme-adapter-react-15'; 

http://airbnb.io/enzyme/docs/installation/index.html