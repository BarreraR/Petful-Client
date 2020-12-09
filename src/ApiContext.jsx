import React from 'react';

export default React.createContext({
  people: [],
  cat: {},
  dog: {},
  person: '',
  addName: ()=>{},
  removePerson: ()=>{},
  remove: ()=>{},
  addSelf: () => {},
});