
const db = require('../config/dbconfig');


// Get all books

const getAllBooks = (request,response) => {
    
    db.query(`select * from bookstall.books`, (err,res) => {

        if(err){
            response.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    })

};

// Getting a book details by its id

const getById = (request, response) => {
    db.query(
      `select * from bookstall.books where book_id="${request.params.id}"`,
      (err, res) => {
        if (err) response.status(500).json(err);
        response.status(res.statusCode).json(res.data[0]);
      }
    );
  };

module.exports = {
    getAllBooks,
    getById
}

