import React, {useState} from "react";
import {Row, Card} from "../../components";

function RowContainer({title, items}) {
  return (
    <Row>
      <Row.Title>{title}</Row.Title>
      <Row.ItemList>
        {items.map((item) => (
          <Card key={item.id}>
            <Card.Poster
              src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
            />
            <Card.HoverCard>
              <Card.HoverPoster
                src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
              />
              <Card.HoverButtons>
                <Card.HoverPlayButton />
                <Card.HoverAddButton />
                <Card.HoverLikeButton />
                <Card.HoverMoreInfoButton />
              </Card.HoverButtons>
            </Card.HoverCard>
          </Card>
        ))}
      </Row.ItemList>
    </Row>
  );
}

export default RowContainer;
