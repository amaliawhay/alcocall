import React from "react";
import { Link } from "react-router-dom";

function references() {
  return (
    <div>
      <main className="container main-content">
        <h4 className="h4">Want to continue your Alcoholic Education?</h4>
        <h5 className="light-blue-text text-darken-1">
          Here are some outside resources...
        </h5>
        <ul>
          <Link
            className="resource-a"
            to="https://www.thespruceeats.com/bartending-tips-for-better-drinks-4105954"
          >
            Bartending 101: The Spruce Eats
          </Link>
        </ul>
        <ul>
          <Link
            className="resource-a"
            to="https://www.nationalgeographic.com/magazine/2017/02/alcohol-discovery-addiction-booze-human-culture/"
          >
            "Our 9,000 Year Love Affair With Booze" by NatGeo
          </Link>
        </ul>
        <ul>
          <Link
            className="resource-a"
            to="http://alcohol-facts.net/Alcohol-History-Facts.html"
          >
            Alcohol History Facts
          </Link>
        </ul>

        <h5 className="light-blue-text text-darken-1">
          And we hope you are drinking responsibly, but remember, Help is always
          available!
        </h5>
        <ul>
          <Link className="resource-a" to="https://www.niaaa.nih.gov">
            The National Institute on Alcoholism and Alcohol Abuse
          </Link>{" "}
        </ul>
        <ul>
          <Link
            className="resource-a"
            to="https://www.aa.org/pages/en_US/find-aa-resources"
          >
            Alcoholics Anonymous
          </Link>{" "}
        </ul>
      </main>
    </div>
  );
}
export default references;
