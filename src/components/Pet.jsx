import React from 'react';

export default function Pet(props){
  const { pet } = props;
  return (
    <div>
      <img src={pet.imageURL} alt={pet.name}/>    
      <p>{pet.description}</p>
      <p>Name: {pet.name} Gender: {pet.gender} Age: {pet.age} Breed: {pet.breed}</p>
      <p>{pet.story}</p>
    </div>
  )
}