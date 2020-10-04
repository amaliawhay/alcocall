import React from "react";
import { TextInput, Collapsible, CollapsibleItem } from "react-materialize";

function collapsible() {
  return (
    <div>
      <Collapsible accordion>
        <CollapsibleItem expanded={false} header="Choose an option" node="div">
          <a>Choose an option</a>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

export default collapsible;
