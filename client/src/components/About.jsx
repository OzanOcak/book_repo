function About() {
  return (
    <div className="py-4 flex-grow h-screen">
      This project shows list of some of my movies, This is a MERN stack project
      that is built with Mongo database, Express.js ,React.js and Mongo.js. I
      also used Mongoose ORM for database modeling and axios for fetching data.
      The pictures of the movies are taken from The Movie Database from{" "}
      <a
        className="text-blue-500 hover:text-blue-700"
        href="https://www.themoviedb.org/?language=en-US"
      >
        themoviedb.org
      </a>
      .
    </div>
  );
}

export default About;
