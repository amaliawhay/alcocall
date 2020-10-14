import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";

function breweryCard() {
  return (
    <div>
      <Row>
        <Col m={12} s={12}>
          <Card
            actions={[
              <a className="btn light-blue darken-1" key="1" href="breweries">
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
            Not sure what you want to drink? Take a chance on me!
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default breweryCard;
