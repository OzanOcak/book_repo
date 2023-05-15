import { Route, Routes } from "react-router-dom";

import CreateMovie from "./components/CreateMovie";
import ShowMovieDetails from "./components/ShowMovieDetails";
import UpdateMovieInfo from "./components/UpdateMovieInfo";
import Layout from "./sections/Layout";
import About from "./components/About";
import ShowmovieList from "./components/ShowMovieList";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Layout>
        <Routes>
          <Route exact path="/" element={<ShowmovieList />} />
          <Route path="/create-movie" element={<CreateMovie />} />
          <Route path="/edit-movie/:id" element={<UpdateMovieInfo />} />
          <Route path="/show-movie/:id" element={<ShowMovieDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
