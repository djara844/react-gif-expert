import React from "react";
import GridGifItem from "./GridGifItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

const GrifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate_animated animate__flash">Cargando...</p>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GridGifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GrifGrid;
