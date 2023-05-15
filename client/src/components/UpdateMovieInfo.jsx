// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line no-unused-vars
function UpdateMovieInfo(props) {
  const [movie, setMovie] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://bookrepo.onrender.com/api/books/${id}`)
      .then((res) => {
        setMovie({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        console.log("Error from UpdatemovieInfo");
      });
  }, [id]);

  const onChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: movie.title,
      isbn: movie.isbn,
      author: movie.author,
      description: movie.description,
      published_date: movie.published_date,
      publisher: movie.publisher,
    };

    axios
      .put(`https://bookrepo.onrender.com/api/books/${id}`, data)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        navigate(`/show-movie/${id}`);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        console.log("Error in UpdatemovieInfo!");
      });
  };

  return (
    <div className="px-1 w-full h-screen">
      <div className="w-4/5 sm:w-3/4 lg:w-1/2 mx-auto">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Movie List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Movie</h1>
            <p className="lead text-center">Update Movie`s Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit} className="">
            <div className="">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Title of the Movie
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title of the movie"
                autoComplete="off"
                value={movie.title}
                onChange={onChange}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
            <br />

            <div className="mb-0">
              <label
                htmlFor="isbn"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                ISBN{" "}
              </label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                autoComplete="off"
                value={movie.isbn}
                placeholder="ISBN"
                onChange={onChange}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <br />

            <div className="">
              <label
                htmlFor="author"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Director
              </label>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="Author"
                autoComplete="off"
                value={movie.director}
                onChange={onChange}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
            <br />

            <div className="">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                autoComplete="off"
                value={movie.description}
                onChange={onChange}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
            <br />

            <div className="">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="date"
                autoComplete="off"
                value={movie.published_date}
                onChange={onChange}
                className="bg-gray-50 border justify-center  border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
            <br />

            <div className="">
              <label
                htmlFor="pub"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Publisher
              </label>
              <input
                type="text"
                id="pub"
                name="publisher"
                placeholder="Description"
                value={movie.publisher}
                onChange={onChange}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
            </div>
            <br />

            <input
              type="submit"
              className="bg-blue-400 px-2 py-1 rounded-lg hover:bg-blue-500 hover:text-white hover:ring-1 hover:ring-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateMovieInfo;
