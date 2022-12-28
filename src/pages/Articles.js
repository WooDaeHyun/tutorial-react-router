import { NavLink, Outlet, Navigate } from "react-router-dom";

const Articles = () => {
  const isLogedin = false;

  if (!isLogedin) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <Outlet />
      <ul>
        <ArticlesItem id={1} />
        <ArticlesItem id={2} />
        <ArticlesItem id={3} />
      </ul>
    </div>
  );
};

const ArticlesItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
