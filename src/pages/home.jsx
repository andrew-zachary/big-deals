import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <div id="home-page" className="text-center">
      <h1><span className="text-capitalize">you can buy without deals</span><br />but <span className="text-uppercase deals-word">deals</span> kill all needs</h1>
      <Link to="/products" className="bd-btn bd-primary-btn mt-5">check big deals</Link>
    </div>
  );
};

export default HomePage;