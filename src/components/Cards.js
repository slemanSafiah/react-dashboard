import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { Stack } from "react-bootstrap";

function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/getCards").then((result) => {
      setCards(result.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <Stack className="cards" direction="horizontal" gap={4}>
      {cards.map((card) => (
        <Card
          companyLogo={card.companyLogo}
          avatars={card.avatars}
          progress={card.progress}
          color={card.color}
        />
      ))}
    </Stack>
  );
}

export default Cards;
