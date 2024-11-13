import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary navbar-expand-md">
      <div className="container-fluid">
        <span className="navbar-brand">Async Thunk</span>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar01"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar01">
          <ul className="navbar-nav">
            <NavLink end to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="posts" className="nav-link">
              Posts
            </NavLink>
            <NavLink to="newPost" className="nav-link">
              Add post
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
