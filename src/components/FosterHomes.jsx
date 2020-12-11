import React, { useContext, useState} from 'react';
import Context from '../ApiContext';

export default function FosterHomes(){
  const { addSelf, addName, people } = useContext(Context);
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const pComponent = people.map((person, i) => 
    <li key={i} style={{backgroundColor: name===person && 'yellow'}}>{person}</li>);

  function handleName(e){
    setName(e.target.value);
  }

  function addPerson(e){
    e.preventDefault();
    setSubmitted(true);
    addName(name);
    addSelf(name);
  }

  return(
    <div>
      <ul>
        {pComponent}
      </ul>
      { !submitted &&
        <form onSubmit={(e)=>addPerson(e)}>
          <label>Name: </label>
          <input type='text' id='name' onChange={(e)=>handleName(e)}/>
          <input type='submit' value='Add name'/>
        </form>
      }
    </div>
  );
}