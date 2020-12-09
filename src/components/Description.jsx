import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Description(){
  const history = useHistory();

  function adopt() {
    history.push('/pets');
  }

  return(
    <div>
      <p>Adopt a cat or a dog! First come, first serve... yada yada yada</p>
      <img alt='adopt-me' src='https://www.humanesocietymiami.org/wp-content/uploads/2020/04/Adopt-a-shelter-pet-today_dog-2000px.jpg' width='400px'/>    
      <button onClick={()=>adopt()}>Begin adoption</button>  
    </div>
  )
}