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
            Some people prefer to leave the mixing to the professionals. Some
            people prefer to not drink alone. Those people should click here to
            find a local expert mixology establishment.
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default BarCard;
