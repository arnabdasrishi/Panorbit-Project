import { useEffect, useState } from "react";
import "../../index.css";
import { useParams } from "react-router-dom";

const Profile = () => {
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
        <h3>Profile</h3>
        <div className="user__img__name">
          <img
            src={userData[params.id - 1].profilepicture}
            alt="usr_img"
            width="40px"
          />
          <p>{userData[params.id - 1].name}</p>
        </div>
      </div>

      <div className="main__content__dashboard">
        <div className="dashboard__content__left">
          <img
            src={userData[params.id - 1].profilepicture}
            alt="prof_img"
            width="40%"
          />
          <h3>{userData[params.id - 1].name}</h3>
          <p className="user__details__left">
            Username: <h3>{userData[params.id - 1].username}</h3>
          </p>
          <p className="user__details__left">
            Username: <h3>{userData[params.id - 1].email}</h3>
          </p>
          <p className="user__details__left">
            Phone: <h3>{userData[params.id - 1].phone}</h3>
          </p>
          <p className="user__details__left">
            Website: <h3>{userData[params.id - 1].website}</h3>
          </p>
          <p className="company__deets">Company</p>
          <p className="user__details__left">
            Name: <h3>{userData[params.id - 1].company.name}</h3>
          </p>
          <p className="user__details__left">
            catchpharase: <h3>{userData[params.id - 1].company.catchPhrase}</h3>
          </p>
          <p className="user__details__left">
            bs: <h3>{userData[params.id - 1].company.bs}</h3>
          </p>
        </div>

        <div className="dashboard__content__right">
          <p>Address</p>
          <p className="user__details__left">
            Street: <h3>{userData[params.id - 1].address.street}</h3>
          </p>
          <p className="user__details__left">
            Suite: <h3>{userData[params.id - 1].address.suite}</h3>
          </p>
          <p className="user__details__left">
            City: <h3>{userData[params.id - 1].address.city}</h3>
          </p>
          <p className="user__details__left">
            Zipcode: <h3>{userData[params.id - 1].address.zipcode}</h3>
          </p>
          <iframe
            title="gmaps"
            src={`https://maps.google.com/maps?q=loc:${
              userData[params.id - 1].address.geo.lat
            },${
              userData[params.id - 1].address.geo.lng
            }&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameBorder="0"
          ></iframe>

          <div className="long__lat__mains">
            <p className="long__lat">
              Lat: <h3>{userData[params.id - 1].address.geo.lat}</h3>
            </p>
            <p className="long__lat">
              Long: <h3>{userData[params.id - 1].address.geo.lng}</h3>
            </p>
          </div>
        </div>
      </div>
      {/* Horizontal & Virtual Lines */}
      <div className="vir_line"></div>
    </div>
  );
};

export default Profile;
