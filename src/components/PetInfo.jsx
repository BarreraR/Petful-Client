import React, { useContext, useEffect, useState } from 'react';
import Pet from './Pet';
import Context from '../ApiContext';
import FosterHomes from './FosterHomes';
import './PetInfo.css';

export default function PetInfo() {
  const { cat, dog, person, people, remove, addName, addSelf } = useContext(Context);
  const [adoptedPet, setAdoptedPet] = useState(false);
  
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
    if(person === null || person === people[0]) return;

    const interval = setInterval(()=>{
      fiveSec();
      console.log('ran fivesec()')
    }, 5000);
    return () => clearInterval(interval);
  });

  function adopted(type){
    setAdoptedPet(true);
    remove(type);
    addSelf(null);
  }

  return (
    <div className='Pet__Info'>
    {!adoptedPet && <h2>Select between a dog or a cat to adopt!</h2>}
    {adoptedPet && <h2 className='Congratulations'>Congratulations! <br/> You are now a pet owner. </h2>}
    <div>
      People Waiting to adopt:
      <FosterHomes />
    </div>
    <div className='cat-or-dog'>
      <div className='cat'>
        <h3>Cats</h3>
        {Object.keys(cat).length > 1 &&
        person === people[0] && 
        <button onClick={()=>adopted('cats')}>Adopt A Cat</button>}
        <Pet pet={cat} />
      </div>
      <div className='dog'>
        <h3>Dogs</h3>
        {Object.keys(dog).length > 1 &&
        person === people[0] && 
        <button onClick={()=>adopted('dogs')}>Adopt A Dog</button>}
        <Pet pet={dog} />
      </div>
    </div>
    </div>
  );
}
