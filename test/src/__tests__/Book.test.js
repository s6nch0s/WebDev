import React from 'react';
import Books from '../components/Books';
import { shallow } from '../enzyme.js';
import axios from 'axios';

jest.mock('axios');

describe('<Books />', () => {
	it('should fetch books', () => {
		// const books = [{book_name: "Harry Potter"}];
    // const resp = {data: books};
    // axios.get.mockResolvedValue(resp);
    //
    // return Books.all().then(data => expect(data).toEqual(books));
    shallow(<Books />)
	});
});
