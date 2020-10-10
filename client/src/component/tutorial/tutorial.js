import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";
function Tutorial() {
  return (
    <Row>
      <Col m={12} s={12}>
        <Card
          actions={[
            <a
              className="btn light-blue darken-1"
              key="1"
              href="https://www.youtube.com/embed/mDuAe3Q0zdI"
            >
              Resources
            </a>
          ]}
          closeIcon={<Icon>close</Icon>}
          header={
            <CardTitle>
              <div className="iframe-container">
                <iframe
                  title="tutorial"
                  className="responsive-iframe"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/mDuAe3Q0zdI"
                  frameBorder="1"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardTitle>
          }
          horizontal
          revealIcon={<Icon>more_vert</Icon>}
        >
          Need a few tips on mixing up your favorites? Come learn from the pros
          in this video on the Basics of Bartending.
        </Card>
      </Col>
    </Row>
  );
}

export default Tutorial;
