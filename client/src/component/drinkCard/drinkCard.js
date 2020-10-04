import React from "react";
import { Row, Col, Card, CardTitle, Icon } from "react-materialize";

function DrinkCard(props) {
  return (
    <div>
      <Row>
        <Col m={6} s={12}>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={props.image} reveal waves="light" />}
            reveal={<p>{props.recipe}</p>}
            revealIcon={<Icon>more_vert</Icon>}
            title={props.title}
          ></Card>
        </Col>
      </Row>
      ;
    </div>
  );
}

export default DrinkCard;
