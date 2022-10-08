import React from "react";
import "./App.css";
import FavNav from "./NavBar";
import FavHeroOne from "./HeroOne";
import FavHeroTwo from "./HeroTwo";
import FavAbout from "./About";
import FavContactSec from "./Contact";
import FavFooterOne from "./FooterOne";
import FavFooterTwo from "./FooterTwo";
import FavModals from "./Modals";

const MyApp = () => {
  return (
    <div>
      <FavNav />
      <FavHeroOne/>
      <FavHeroTwo/>
      <FavAbout title={"David"}/>
      <FavContactSec/>
      <FavFooterOne/>
      <FavFooterTwo/>
      <FavModals/>
    </div>
  );
};

export default MyApp;
