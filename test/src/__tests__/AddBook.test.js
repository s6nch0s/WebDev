import React from 'react';
import addBook from '../components/addBook';
import { shallow } from '../enzyme.js';

test('renders without crashing', () => {
	const app = shallow(<addBook/>);
  app;
});
