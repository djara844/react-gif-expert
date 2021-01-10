import React, { useState } from "react";
import AdCategory from "./components/AdCategory";
import GrifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["Dragon Ball"]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "Fútbol"]);
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AdCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GrifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
