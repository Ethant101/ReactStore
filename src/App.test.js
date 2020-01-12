import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';
import LoginPage from "./components/LoginPage";
import {Route} from "react-router-dom";
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>)
  });
  describe('Initial State', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App/>, div);
    });
    it('should have a route to login Page', () => {
      expect(wrapper.contains(<Route exact path="/" component={LoginPage}/>)).toBe(true);
    })
  });

});


