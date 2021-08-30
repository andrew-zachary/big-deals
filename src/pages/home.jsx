import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <div id="home-page" className="text-center">
      <h1><span className="text-uppercase">one store</span><br />all your needs</h1>
      <Link to="/products" className="bd-btn bd-primary-btn mt-5">start shopping now</Link>
    </div>
  );
};

export default HomePage;