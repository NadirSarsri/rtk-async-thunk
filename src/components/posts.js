import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/postsSlice";
import { useState, useEffect } from "react";

import Post from "./post";

const Posts = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const {
    error,
    status,
    posts: allPosts,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    } else if (status === "Succeeded") {
      setPosts(allPosts);
    }
  }, [dispatch, status, posts, allPosts]);

  return (
    <div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
