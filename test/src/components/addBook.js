import React, { Component } from 'react';
import axios from 'axios';
import "./addBook.css";

export class addBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name : '',
        author : '',
        year : null,
        genre : '',
        language :''
      }
    }
    handleGet = (e) => {
      // e.preventDefault();
      if(document.getElementById('b_name')) var b_name = document.getElementById('b_name').value;
      if(document.getElementById('a_name')) var a_name = document.getElementById('a_name').value;
      if(document.getElementById('year')) var year = document.getElementById('year').value;
      if(document.getElementById('lang')) var lang = document.getElementById('lang').value;
      if(document.getElementById('genre')) var genre = document.getElementById('genre').value;
      document.getElementById('text').innerHTML = "Your adding of book " + b_name + " is successfuly finished.";
      axios({
        method: 'post',
        url: 'api/book/add',
        data: {
          name : b_name,
          author : a_name,
          language : lang,
          genre : genre,
          year: parseInt(year)
        }
      });
      return b_name;
  //     fetch('http://localhost:5001/api/book/add',{
  //   mode: 'cors',
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(this.state),
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log('Success :', JSON.stringify(this.state));
  // })
  // .catch((error) => {
  //   console.error('Error', error);
  // });
    }
    render() {
        return (
            <div сlassName="addBookMain">
                <div className="contact-section">
                    <h1>Adding book form</h1>
                    <div className="border"></div>
                    <form className="contact-form">
                    <p id="text"></p>
                    <input id="b_name" type="text" className="contact-form-text" placeholder="Book name" />
                    <input id="a_name" type="text" className="contact-form-text" placeholder="Author name" />
                    <input id="year" type="text" className="contact-form-text" placeholder="Year" />
                    <input id="lang" type="text" className="contact-form-text" placeholder="Language" />
                    <input id="genre" type="text" className="contact-form-text" placeholder="Genre" />
                    <input type="submit" className="contact-form-btn" value="Add" onClick={this.handleGet}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default addBook;
