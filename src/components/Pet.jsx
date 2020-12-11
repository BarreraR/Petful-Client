import React from 'react';

export default function Pet(props){
  const { pet } = props;

  function renderDesc(){
    if(Object.keys(pet).length > 1){
      return <div>
          <img src={pet.imageURL} alt={pet.name} width='400px'/>    
          <p>{pet.description}</p>
          <p>Name: {pet.name} Gender: {pet.gender} Age: {pet.age} Breed: {pet.breed}</p>
          <p>{pet.story}</p>
        </div>
    }else{
      return <div>
          <p>Sorry, no pet at this time.</p>
        </div>
    }
  }
  return (
    <>
      {renderDesc()}
    </>
  )
}