import React, { useState } from "react";
import styles from "../css/cookbook.module.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";

function Recipe(props) {
  const [viewType, setViewType] = useState("grid");
  const isGrid = viewType === "grid";
  const text = props.recipe.description;

  return (
    <Card style={{ width: "300px" }}>
      <Card.Img variant="top" src={props.recipe.imgUri} />
      <Card.Body>
        <Card.Title>{props.recipe.name}</Card.Title>
        <Card.Text className={styles.cardText}>
          {isGrid ? <p className="text-truncate">{text}</p> : <p>{text}</p>}
        </Card.Text>
        <ul>
          <li>{props.recipe.name}</li>
        </ul>
        <div className="container-fluid">
          <Button
            variant="outline-primary"
            onClick={() =>
              setViewType((currentState) => {
                if (currentState === "grid") return "table";
                else return "grid";
              })
            }
          >
            <Icon size={1} path={isGrid ? mdiChevronDown : mdiChevronUp} />{" "}
            {isGrid ? "More" : "Less"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Recipe;
