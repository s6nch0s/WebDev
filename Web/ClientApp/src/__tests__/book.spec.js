import React, { Component } from 'react';
import Books from "../components/Book.js";
import * as enzyme from 'enzyme';
import { shallow } from 'enzyme';
import '../setupTests.js';

 enzyme.configure({ adapter: new Adapter() });

describe('<Books />', () => {
	it('renders without crashing', () => {
		shallow(<Books />);
	});
});
