import React, { Component } from 'react';
import axios from 'axios';
import './books.css'
import { Link } from 'react-router-dom';

export class Books extends Component {
    state = {
        books : []
    }
    componentDidMount() {
        axios.get('api/book').then(res => {
            this.setState({
                books: res.data
            })
        })
    }
    handleDelete(id){
      var url = "api/book/delete/" + id;
      axios({
        method: 'delete',
        url: url
      });
    window.location.reload(false);
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
                                <button type='submit' className="DeleteBook" onClick={() => this.handleDelete(book.id)}>Delete Book</button>
                            </div>
                        </div>
                    )
                })
            ) : (
                    <div className="center">No books</div>
                    )
        return (
            <div className="BookMain">
                <Link to="/addBook">
                      <button type="submit" className="lol">Add Book</button>
                </Link>
                {booksList}
            </div>
        );
    }
}

export default Books;
