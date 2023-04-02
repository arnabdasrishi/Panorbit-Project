import { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import Post from "./Post";
import Gallery from "./Gallery";
import Todo from "./Todo";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  const [userData, setUserData] = useState([]);
  const { id, subpath } = useParams();

  const renderers = {
    post: <Post />,
    gallery: <Gallery />,
    todo: <Todo />,
  };

  async function fetchData() {
    try {
      await fetch(`https://panorbit.in/api/users.json`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data.users);
          // console.log(data.users[params.id - 1]);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (userData[id - 1] === undefined) {
    return <h2>...loading</h2>;
  }
  return (
    <div className="dashboard-main">
      <div className="left__nav__flex">
        <p>
          <NavLink
            to={`/dashboard/user/${id}`}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Profile
          </NavLink>
        </p>
        <p>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={`/dashboard/user/${id}/post`}
          >
            Post
          </NavLink>
        </p>
        <p>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={`/dashboard/user/${id}/gallery`}
          >
            Gallery
          </NavLink>
        </p>
        <p>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={`/dashboard/user/${id}/todo`}
          >
            Todo
          </NavLink>
        </p>
      </div>

      {subpath !== undefined ? renderers[subpath] : <Profile />}
    </div>
  );
};

export default Homepage;
