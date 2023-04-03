import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../../index.css";

const Gallery = () => {
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
    <div className="right__content__flex">
      <div className="user__info__top">
        <h3>Gallery</h3>
        <div className="user__img__name">
          <img
            src={userData[params.id - 1].profilepicture}
            alt="usr_img"
            width="40px"
          />
          <p>{userData[params.id - 1].name}</p>
        </div>
      </div>

      <div className="comming__soon">
        <h1>Comming Soon</h1>
      </div>
    </div>
  );
};

export default Gallery;
