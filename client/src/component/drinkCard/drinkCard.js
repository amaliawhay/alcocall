import React from "react";
import { Row, Col, Card, CardTitle, Icon } from "react-materialize";

function DrinkCard(props) {
  return (
    <div>
      <Row>
        <Col m={6} s={12}>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle
                image={props.image || "https://rb.gy/vmljxu"}
                reveal
                waves="light"
              />
            }
            reveal={
              <div>
            <p> 
            <ul> {props.ing.map(element => {
              return (
                <li key={element}>
                  {element}
                </li>
              )
            })}
            </ul>{props.directions}</p>
            </div>
            }
            revealIcon={<Icon>more_vert</Icon>}
            title={props.title || "generic response"}
          ></Card>
        </Col>
      </Row>
      
    </div>
  );
}

export default DrinkCard;
