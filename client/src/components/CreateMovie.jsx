// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const CreateMovie = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    isbn: "",
    img: "",
    director: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const onChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://bookrepo.onrender.com/api/books", movie)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        setMovie({
          title: "",
          isbn: "",
          img: "",
          director: "",
          description: "",
          published_date: "",
          publisher: "",
        });

        // Push to /
        navigate("/");
      })
      .catch((err) => {
        console.log(`${err} error in Createmovie!`);
      });
  };

  return (
    <div className="px-1 w-full h-screen">
      <div className="w-4/5 sm:w-3/4 lg:w-1/2 mx-auto">
        <div className="">
          <br />
          <Link to="/" className="">
            Show Movie List
          </Link>
        </div>
        <div className="">
          <h1 className="">Add Movie</h1>
          <p className="lead text-center">Create new movie</p>

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

            <div className="mb-0">
              <label
                htmlFor="img"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Image{" "}
              </label>
              <input
                type="text"
                id="img"
                name="img"
                autoComplete="off"
                value={movie.img}
                placeholder="image"
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
                id="director"
                name="director"
                placeholder="Director"
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
};

export default CreateMovie;
