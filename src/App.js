import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Posts from "./components/posts";
import AddPost from "./components/addPost";
import UpdatePost from "./components/updatePost";

import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="newPost" element={<AddPost />} />
          <Route path="updatePost/:id" element={<UpdatePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
