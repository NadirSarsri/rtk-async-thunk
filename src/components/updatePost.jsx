import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../features/postsSlice";
import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/axios";

const UpdatePost = () => {
  const { id: postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const foundPost = useSelector((state) =>
  //     state.posts.posts.find((post) => post.id === parseInt(postId))
  //   );
  // const [post, setPost] = useState(foundPost);

  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.get(`/posts/${postId}`);
        setPost(response.data);
        setStatus("Succeeded");
      } catch (err) {
        setStatus("Failed to fetch post. Verify the post id");
      }
    };
    if (!post) {
      fetchPost();
    }
  }, [post, postId]);

  const handleUpdatePost = () => {
    const updatedPost = {
      userId: post.userId,
      title: post.title,
      body: post.body,
      id: post.id,
    };

    dispatch(updatePost(updatedPost));
    navigate("/posts", { replace: true });
  };
  return (
    <form>
      <h2 className="display-4">Editing post #{postId}</h2>
      {post && (
        <>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              value={post?.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
              value={post?.body}
              onChange={(e) => setPost({ ...post, body: e.target.value })}
              className="form-control"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleUpdatePost}
            className="btn btn-primary"
          >
            Update
          </button>
        </>
      )}
      {!post && <h1 className="text-danger">{status}</h1>}
    </form>
  );
};

export default UpdatePost;
