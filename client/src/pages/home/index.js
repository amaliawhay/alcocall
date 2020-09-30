import React from "react";
import { Link } from "react-router-dom";
import Jumbo from "../../component/carousel/index";
import Container from "../../component/container/container";
import BreweryCard from "../../component/breweryCard/index";
import RandomCard from "../../component/randomCard/index";
import BarCard from "../../component/barCard/index";
import Tutorial from "../../component/tutorial/tutorial";

function home() {
  return (
    <div>
      <Jumbo />
      <Container />

      <BreweryCard />
      <RandomCard />
      <BarCard />
      <Tutorial />
    </div>
  );
}
export default home;
