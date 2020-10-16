import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";

function RandomCard() {
  return (
    <div>
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
            Not sure what you want to drink? Take a chance on me!
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RandomCard;
