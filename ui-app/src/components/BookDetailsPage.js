import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BOOK_LIST_API_URL } from '../constants';



const BookDetailsPage = () =>{
    const [bookDetails, updateBookDetails] = useState();
    const params = useParams();

    useEffect(() => {

        async function fetchData(){
            const bookDetailsResponse = await fetch(BOOK_LIST_API_URL + '/' + params.id);
            const bookDetailsJsonData = await bookDetailsResponse.json();
            updateBookDetails(bookDetailsJsonData);
        };
        fetchData();
    },[]);

    return <div> 
         {bookDetails
         && <div>
                <p>{'Title: ' + bookDetails.title}</p>
                <p>{'Author: ' + bookDetails.author}</p>
                <img src={bookDetails.cover} alt={bookDetails.title}/>
                <p>{'ISBN: ' + bookDetails.isbn}</p>
                <p>{'website link: ' + bookDetails.website}</p>
                </div>
            }   
    </div>;
};

export default BookDetailsPage;