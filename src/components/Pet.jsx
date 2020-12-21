import React from 'react';

export default function Pet(props){
  const { pet } = props;

  function renderDesc(){
    if(Object.keys(pet).length > 1){
      return <div>
          <img src={pet.imageURL} alt={pet.name} width='400px'/>    
          <h3>Description:</h3>
          <p>
            <strong>Name:</strong> {pet.name}<br/> 
            <strong>Gender:</strong> {pet.gender} <br/> 
            <strong>Age:</strong> {pet.age} <br/> 
            <strong>Breed:</strong> {pet.breed}</p>
          <p><strong>About:</strong> {pet.story}</p>
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