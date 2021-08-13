import React, { useEffect, useState } from 'react';
import { BOOK_LIST_API_URL } from '../constants';
import { useHistory } from 'react-router';


const BookListPage = () => {
    const [bookList, updateBookList] = useState([]);
    const history = useHistory();

    useEffect(() =>{
        
        async function fetchData() {
            const bookListResponse = await fetch(BOOK_LIST_API_URL);
            const bookListJsonData = await bookListResponse.json();
            updateBookList(bookListJsonData);
        };

        fetchData();

    },[]);

    return <div className="list-book">
        {console.log(bookList)}
        {bookList.map(book => 

            <div className="book">
               <h2 className="book-title">{book.title}</h2>
               <p className="book-author">{"by " + book.author}</p>
               <img className="book-cover" src={book.cover} alt={book.title} onClick={() => history.push(`/bookdetails/${book.book_id}`)}></img>
               <p className="book-desc">{"Description: " + book.description}</p>
            </div>
        )}
    </div>
};

export default BookListPage;