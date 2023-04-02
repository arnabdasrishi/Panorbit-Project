import { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import Post from "./Post"
import Gallery from "./Gallery"
import Todo from "./Todo"

const Homepage = () => {
  const [userData, setUserData] = useState([]);
  const params = useParams();

  async function fetchData() {
    try {
      await fetch(`https://panorbit.in/api/users.json`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data.users);
          console.log(data.users[params.id - 1]);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (userData[params.id - 1] === undefined) {
    return <h2>...loading</h2>;
  }
  return (
    <div className="dashboard-main">
      <div className="left__nav__flex">
        <p>Profile</p>
        <p>Post</p>
        <p>Gallery</p>
        <p>ToDo</p>
      </div>

      <Profile />
      <Post />
      <Gallery />
      <Todo />

      {/* Horizontal & Virtual Lines */}
      <div className="vir_line"></div>
    </div>
  );
};

export default Homepage;
