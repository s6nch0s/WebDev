import React from 'react';
import App from '../App';
import { shallow } from '../enzyme.js';

test('renders without crashing', () => {
	const app = shallow(<App/>);
	expect(app.containsAnyMatchingElements([<a>
        Learn React
      </a>
    ])
  ).toBe(true);
});
