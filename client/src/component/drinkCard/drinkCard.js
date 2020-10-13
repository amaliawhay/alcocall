import React from "react";
import { Row, Col, Card, CardTitle, Icon } from "react-materialize";

function DrinkCard(props) {
  return (
    <div>
     
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
             
            <ul> {props.ing.map(element => {
              console.log(element)
              return (
                <li key={element}>
                  {element}
                </li>
              )
            })}
            </ul>
            <p>{props.directions}</p>
            </div>
            }
            revealIcon={<Icon>more_vert</Icon>}
            title={props.title || "generic response"}
          ></Card>
        
      
    </div>
  );
}

export default DrinkCard;
