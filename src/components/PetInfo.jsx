import React, { useContext, useEffect, useState } from "react";
import Pet from "./Pet";
import Context from "../ApiContext";
import FosterHomes from "./FosterHomes";
import "./PetInfo.css";

export default function PetInfo() {
  const { cat, dog, person, people, remove, addName } = useContext(Context);
  const [timer, setTimer] = useState();
  
  function fiveSec(){

    if(people.length < 5){
      addName('Mr. Anonymous');
      return;
    }

    if(person !== people[0] ){
      remove();
      return;
    }
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      fiveSec();
    }, 5000);
    setTimer(interval);
    return () => clearInterval(interval);
  }, []);

  function adopted(type){
    remove(type);
    clearInterval(timer);
  }

  return (
    <>
    <h2>Select between a dog or a cat to adopt!</h2>
    <div className='cat-or-dog'>
      <div className='cat'>
        {person === people[0] && <button onClick={()=>adopted('cats')}>Adopt A Cat</button>}
        <Pet pet={cat} />
      </div>
      <div className='dog'>
        {person === people[0] && <button onClick={()=>adopted('dogs')}>Adopt A Dog</button>}
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
