import React, {useContext} from "react";
import RowContainer from "./RowContainer";
import { ContentContext } from "../../context/content-context";

function SlidesContainer() {
  const {moviesRows} = useContext(ContentContext);

  return (
    <>
    {moviesRows.map((row) => (
      <RowContainer title={row.title} items={row.items} key={row.id}/>
    ))}
    </>
  );
}

export default SlidesContainer;
