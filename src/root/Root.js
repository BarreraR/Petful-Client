import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Description from '../components/Description';
import PetInfo from '../components/PetInfo';
import Context from '../ApiContext.jsx';

function Root() {
  const [people, setPeople] = useState([]);
  const [cat, setCat] = useState({});
  const [dog, setDog] = useState({});
  const [person, setPerson] = useState('');

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:8000/people`),
      fetch(`http://localhost:8000/pets/dogs`),
      fetch(`http://localhost:8000/pets/cats`),
    ])
      .then(([peopleRes, dogRes, catRes]) => {
        if(!peopleRes.ok)
          return peopleRes.json().then((e)=>Promise.reject(e));
        if(!dogRes.ok)
          return dogRes.json().then((e)=>Promise.reject(e));
        if(!catRes.ok)
          return catRes.json().then((e)=>Promise.reject(e));
        
        return Promise.all([
          peopleRes.json(),
          dogRes.json(),
          catRes.json(),
        ]);
      })
      .then(([people, dog, cat]) => {
        setPeople(people);
        setCat(cat);
        setDog(dog);
      })
      .catch(error => console.error({error}));
  }, []);

  function addName(name){
    fetch('http://localhost:8000/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'person': name})
    })
    .then(() => {
      setPeople([...people, name]);
    })
    .catch(e=>console.error(e));
  }

  function addSelf(name){
    setPerson(name);
  }  

  function remove(type = null){
    let pet;
    if(type) pet = type; 
    else {
      const c = Object.keys(cat).length;
      const d = Object.keys(dog).length;
      pet = Math.floor(Math.random() * 2) ? 'cats':'dogs';
      if(c === 0 && d === 0) return;
      if(c === 0) pet = 'dogs';
      if(d === 0) pet = 'cats';
    }

    Promise.all([
      fetch(`http://localhost:8000/people`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }),
      fetch(`http://localhost:8000/pets/${pet}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }),
    ])
      .then(([personRes, petRes]) => {
        if(!personRes.ok) return personRes.json().then(e => Promise.reject(e));
        if(!petRes.ok) return personRes.json().then(e => Promise.reject(e));
        return Promise.all([
          //personRes.json(),
          petRes.json(),
        ])
      })
      .then(([petRes]) => {
        setPeople(people.slice(1));
        pet === 'cats'? setCat(petRes): setDog(petRes);
      })
      .catch(e=> console.error(e));
  } 
  
  const value = {
    people,
    cat,
    dog,
    person,
    addName,
    remove,
    addSelf,
  }
  return (
    <Context.Provider value={value}>
      <div>
        <h1>Petful</h1>
        <Route exact path='/' component={Description} />
        <Route exact path='/pets' component={PetInfo} />
      </div>
    </Context.Provider>
  );
}

export default Root;
