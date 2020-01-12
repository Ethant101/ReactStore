// jest-dom adds custom jest matchers for asserting on DOM nodes.

import '@testing-library/jest-dom/extend-expect';
import raf from './tempPolyfills'

import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });