import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../css/cookbook.module.css";

function Recipe(props) {
  return (
    <Card style={{ width: "300px" }}>
      <Card.Img variant="top" src={props.recipe.imgUri} />
      <Card.Body>
        <Card.Title>{props.recipe.name}</Card.Title>
        <Card.Text className={styles.cardText}>
          {props.recipe.description}
        </Card.Text>
        <Button variant="primary">Celý recept</Button>
      </Card.Body>
    </Card>
  );
}

export default Recipe;
