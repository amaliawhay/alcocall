import React from "react";
import { Icon, Row, CardTitle, Col, Card } from "react-materialize";

// function RandomCard() {
//   return (
//     <div>
//       <div className="col s12 l4">
//         <div className="card">
//           <div className="card-image">
//             <img
//               src="/assets/images/jenna-bollweg-5Ufq_E6PCz0-unsplash.jpg"
//               alt="Mai Tai mixed drink"
//             />
//             <Link
//               to="recipes"
//               className="halfway-fab btn-floating light-blue darken-1 pulse"
//             >
//               <i className="material-icons">whatshot</i>
//             </Link>
//           </div>
//           <div className="card-content">
//             <span className="card-title light-blue-text text-darken-1">
//               Random Drink
//             </span>
//             <p>Not sure what you want to drink? Take a chance on me!</p>
//           </div>
//           <div className="card-action center-align">
//             <Link className="btn light-blue darken-1" to="recipes">
//               Surprise Me!
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function RandomCard() {
  return (
    <div>
      <Row>
        <Col m={12} s={12}>
          <Card
            actions={[
              <a className="btn light-blue darken-1" key="1" href="recipes">
                Random Drink
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
