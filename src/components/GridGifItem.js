import React from "react";

const GridGifItem = ({ title, url }) => {
  return (
    <>
      <div className="card animate__animated animate__bounce animate__delay-1s">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
};

export default GridGifItem;
