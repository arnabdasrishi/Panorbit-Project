import React from "react";
import "../index.css";
import AccountList from "./AccountList";

const LandingPage = () => {
  return (
    <div className="landing__page__main">
      {/* User Accounts List */}
      <AccountList />
    </div>
  );
};

export default LandingPage;
