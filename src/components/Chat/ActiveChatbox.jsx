import { useEffect, useState } from "react";
import Chatbox from "./Chatbox";
import "../../index.css";

const ActiveChatbox = () => {
  const [userData, setUserData] = useState([]);
  // Fetch data function
  async function fetchData() {
    try {
      await fetch(`https://panorbit.in/api/users.json`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data.users);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="chatlist">
      <Chatbox />
      {/* mapped data of user will be shown here */}
      {userData && userData.map((items) => (
        <div key={items.id} className="chat__user__list">
          <img src={items.profilepicture} alt="chat_img"  />
          <p>{items.name}</p>
          <p>🟢</p>
        </div>
      ))}
    </div>
  );
};

export default ActiveChatbox;
