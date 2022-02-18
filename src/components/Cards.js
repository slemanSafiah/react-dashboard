import Card from "./Card";
import { Stack } from "react-bootstrap";

function Cards() {
  return (
    <Stack className="cards" direction="horizontal" gap={5}>
      <Card />
      <Card />
    </Stack>
  );
}

export default Cards;
