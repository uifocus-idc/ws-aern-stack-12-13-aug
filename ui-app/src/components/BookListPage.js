import React, { useEffect, useState } from 'react';
import { BOOK_LIST_API_URL } from '../constants';


const BookListPage = () => {
    const [bookList, updateBookList] = useState([]);

    useEffect(() =>{
        
        async function fetchData() {
            const bookListResponse = await fetch(BOOK_LIST_API_URL);
            const bookListJsonData = await bookListResponse.json();
            updateBookList(bookListJsonData);
        };

        fetchData();

    },[]);

    return <div>
        {console.log(bookList)}
        {bookList.map(book => 

            <div>
               <p>{"Title: " + book.title}</p>
               <p>{"Author: " + book.author}</p>
               <img src={book.cover} alt={book.title}></img>
               <p>{"Description" + book.description}</p>
            </div>
        )}
    </div>
};

export default BookListPage;