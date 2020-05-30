import React, { Component } from 'react';
import axios from 'axios';
import './books.css'

export class Books extends Component {
    state = {
        books : []
    }
    componentDidMount() {
        axios.get('https://localhost:5001/api/book').then(res => {
            console.log(res)
            this.setState({
                books: res.data
            })
        })
    }
        render() {
            const { books } = this.state;
            const booksList = books.length ? (
                books.map(book => {
                    return (
                        <div className="post card" key={book.id}>
                            <div className="card-component">
                                <span className="card-title">{book.year}</span>
                                <p>{book.name}</p>
                                <p>{book.author}</p>
                            </div>
                        </div>
                    )
                })
            ) : (
                    <div className="center">No books</div>
                    )
        return (
            <div>
                <button />
                {booksList}
            </div>
        );
    }
}

export default Books;