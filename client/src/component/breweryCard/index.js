import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";

function breweryCard() {
  return (
    <div className="container">
      <Row>
        <Col m={12} s={12}>
          <Card
            actions={[
              <a className="btn light-blue darken-1 card-buttons" key="1" href="breweries">
                Find a local brewery
              </a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle image="/assets/images/sal-gh-BV5YkMpFlj4-unsplash.jpg" />
            }
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            <h3 className="h3">Need a beer, brewski, cold one, ale or whatever else you want to call it?</h3>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default breweryCard;
