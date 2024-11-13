import { useDispatch } from "react-redux";
import { addPost } from "../features/postsSlice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewPost = () => {
    const newPost = {
      userId: 1,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };

    dispatch(addPost(newPost));
    navigate("/posts", { replace: true });
  };
  return (
    <form>
      <h2 className="display-4">Add new post</h2>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input ref={titleRef} type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea ref={bodyRef} className="form-control"></textarea>
      </div>
      <button type="button" onClick={handleNewPost} className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddPost;
