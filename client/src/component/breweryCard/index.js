import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";

function breweryCard() {
  return (
    <div>
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
          <h5>Craft beer is a trend that has swept the nation. IPA, hazy, juicy, session or saison? Whatever it is, find it locally, make it unique, and seek it here.  Craft Breweries are a trend to some, and a lifestyle for others. Find all your local breweries and tasting rooms for the next time you need a local hazy, juicy, double IPA.</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default breweryCard;
