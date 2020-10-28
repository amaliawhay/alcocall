import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";

function RandomCard() {
  return (
    <div className="container">
      <Row>
        <Col m={12} s={12}>
          <Card
            actions={[
              <a className="btn light-blue darken-1 card-buttons" key="1" href="recipes">
                Find a drink
              </a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={
            <CardTitle image="/assets/images/jenna-bollweg-5Ufq_E6PCz0-unsplash.jpg" />
            }
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            <h3 className="h3 left">Need a beer, brewski, cold one, ale or whatever else you want to call it?</h3>
            <h5 className="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RandomCard;
