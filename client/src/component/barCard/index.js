import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";
import "./style.css";
import { Link } from "react-router-dom";

function BarCard() {
  return (
    <div>
      <Row>
        <Col m={12} s={12}>
          <Card 
            actions={[
              <a className="btn light-blue darken-1 card-buttons" key="1" href="bars">
                Find me a bartender!
              </a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle image="/assets/images/ergita-sela-h1tb2E1f3u4-unsplash.jpg">
                <Link
                  to="bars"
                  style={{
                    fontFamily: "BenchNine, sans-serif",
                    color: "white",
                    fontSize: "large"
                  }}
                >
                </Link>
              </CardTitle>
            }
            horizontal
            revealIcon={<Icon className="material-icons">local_bar</Icon>}
          >
            <h3 className="h3">Ready to get out of the house? Quaranteen, shaurmanteen... I need a drink!</h3>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default BarCard;
