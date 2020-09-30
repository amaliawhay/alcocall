import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";
function basicCard() {
  return (
    <Row>
      <Col m={12} s={12}>
        <Card
          actions={[
            <a key="1" href="#">
              This is a link
            </a>
          ]}
          closeIcon={<Icon>close</Icon>}
          header={
            <CardTitle image="/assets/images/jenna-bollweg-5Ufq_E6PCz0-unsplash.jpg" />
          }
          horizontal
          revealIcon={<Icon>more_vert</Icon>}
        >
          from the pros in this video on the Basics of Bartending.
        </Card>
      </Col>
    </Row>
  );
}

export default basicCard;
