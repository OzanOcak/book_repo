// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line no-unused-vars
function ShowBookDetails(props) {
  const [book, setBook] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        navigate("/");
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  };

  const BookItem = (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{book.title}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Director</td>
            <td>{book.director}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{book.isbn}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{book.publisher}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{book.published_date}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{book.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="ShowBookDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            {/*<Link to="/" className="btn btn-outline-warning float-left">
              Show Book List
            </Link>*/}
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Movie`s Record</h1>
            <p className="lead text-center">View Movie`s Info</p>
            <hr /> <br />
          </div>
          <div className="col-md-10 m-auto border p-4 border-black">
            {BookItem}
          </div>
          <div className="flex my-4">
            <div className="col-md-6 m-auto">
              <button
                type="button"
                className="bg-red-500 text-white px-2 py-1 rounded-md"
                onClick={() => {
                  onDeleteClick(book._id);
                }}
              >
                Delete Movie
              </button>
            </div>
            <div className="col-md-6 m-auto">
              <Link
                to={`/edit-movie/${book._id}`}
                className="bg-green-500 text-white px-2 py-1 rounded-md"
              >
                Edit Movie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBookDetails;
