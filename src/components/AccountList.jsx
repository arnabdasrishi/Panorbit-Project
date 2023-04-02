import { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const AccountList = () => {
  const [profData, setProfData] = useState([]);

  // Fetching data from the api
  const fetchData = () => {
    try {
      fetch(`https://panorbit.in/api/users.json`)
        .then((res) => res.json())
        .then((data) => {
          setProfData(data.users);
          // console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="all__accounts__list__main">
      {/* List header */}
      <div className="header__account__list">
        <h3>Select an account</h3>
      </div>

      {/* All list names fetched and map here from the api */}
      <div className="all__users__list">
        {profData &&
          profData.map((items) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/dashboard/user/${items.id}`}
              >
                <div key={items.id} className="users__list">
                  <img src={items.profilepicture} alt="prof_imageXS" />
                  <p>{items.name}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default AccountList;
