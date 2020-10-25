import React from "react";
import Jumbo from "../../component/carousel/index";
import Container from "../../component/container/container";
import BreweryCard from "../../component/breweryCard/index";
import RandomCard from "../../component/randomCard/index";
import BarCard from "../../component/barCard/index";

function home() {
  return (
    <div>
      <Jumbo />
      {/* <Container /> */}
      <RandomCard />
      <BreweryCard />
      <BarCard />
    </div>
  );
}
export default home;
