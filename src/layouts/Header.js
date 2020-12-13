import React from "react";
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";

import img1 from "../images/j1.jpg";
import img2 from "../images/j2.jpg";
import img3 from "../images/j3.jpg";

const Header = () => {
    // const images = [img1, img2, img3];
    // const index = Math.floor(Math.random() *3);
    // const img = images[index];
    // console.log(index , img)

  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="miasto" />} />
        <Route path="/products" render={() => <img src={img2} alt="miasto" />}/>
        <Route path="/contact" render={() => <img src={img3} alt="miasto" />} />
        <Route path="/admin" render={() => <img src={img1} alt="miasto" />} />
        <Route render={() => <img src={img1} alt="miasto" />} />
      </Switch>
      {/* <img src={img} alt="header"/> */}
    </>
  );
};

export default Header;
