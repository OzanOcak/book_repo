// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line no-unused-vars
function ShowBookDetails(props) {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://bookrepo.onrender.com/api/books/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`https://bookrepo.onrender.com/api/books/${id}`)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        navigate("/");
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  };

  const MovieItem = (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{movie.title}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Director</td>
            <td>{movie.director}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{movie.isbn}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{movie.publisher}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{movie.published_date}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{movie.description}</td>
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
            {MovieItem}
          </div>
          <div className="flex my-4">
            <div className="col-md-6 m-auto">
              <button
                type="button"
                className="bg-red-500 text-white px-2 py-1 rounded-md"
                onClick={() => {
                  onDeleteClick(movie._id);
                }}
              >
                Delete Movie
              </button>
            </div>
            <div className="col-md-6 m-auto">
              <Link
                to={`/edit-movie/${movie._id}`}
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
