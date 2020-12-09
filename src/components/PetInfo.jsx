import React, { useContext } from "react";
import Pet from "./Pet";
import Context from "../ApiContext";
import FosterHomes from "./FosterHomes";
import "./PetInfo.css";

export default function PetInfo() {
  const { cat, dog } = useContext(Context);
  return (
    <>
    <h2>Select between a dog or a cat to adopt!</h2>
    <div className='cat-or-dog'>
      <div className='cat'>
        <button>Adopt A Cat</button>
        <Pet pet={cat} />
      </div>
      <div className='dog'>
        <button>Adopt A Dog</button>
        <Pet pet={dog} />
      </div>
      <div>
        People Waiting to adopt:
        <FosterHomes />
      </div>
    </div>
    </>
  );
}
