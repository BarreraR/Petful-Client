import React, { useContext, useEffect, useState} from 'react';
import Context from '../ApiContext';

export default function FosterHomes(){
  const { addSelf, remove, removePerson, addName, person, people } = useContext(Context);
  const [name, setName] = useState('');
  const pComponent = people.map((person, i) => <li key={i}>{person}</li>);

  function fiveSec(){
    console.log(person, people[0])

    if(people.length < 5){
      addName('Mr. Anonymous');
      return;
    }

    if(person !== people[0] ){
      remove();
      // removePerson();
      // removePet();
      return;
    }
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      // handle removing from person queue
      fiveSec();
    }, 5000);
    return () => clearInterval(interval);
  }, [person, people]);

  function handleName(e){
    setName(e.target.value);
  }

  function addPerson(e){
    e.preventDefault();
    addName(name);
    addSelf(name);
  }

  return(
    <div>
      <ul>
        {pComponent}
      </ul>
      <form onSubmit={(e)=>addPerson(e)}>
        <label>Name: </label>
        <input type='text' id='name' onChange={(e)=>handleName(e)}/>
        <input type='submit' value='Add name'/>
      </form>
    </div>
  );
}