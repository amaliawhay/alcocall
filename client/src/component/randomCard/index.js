import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";

function RandomCard() {
  return (
    <div className="container">
      <Row>
        <Col m={12} s={12}>
          <Card
            actions={[
              <a className="btn light-blue darken-1 card-buttons pulse" key="1" href="recipes">
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
            <h3 className="h3">Tired of your 'Usual?' Trying to impress your Tinder date? Try a New Drink Recipe. </h3>
            <h5>DID YOU GET YOU TINDER DATE HOME FOR A NIGHTCAP AND NOW YOU DON'T KNOW WHAT TO DO??  We got you.</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RandomCard;
