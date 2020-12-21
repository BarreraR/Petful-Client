import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from '../ApiContext';
import "./Description.css";

export default function Description() {
  const history = useHistory();
  const { addSelf } = useContext(Context);

  function adopt() {
    addSelf('');
    history.push("/pets");
  }

  return (
    <div className="App__Home">
      <h2>Adopt a furry new friend today!</h2>
      <p>
        Welcome to Petful. In this adoption center, we put up pets for families
        looking to make a new permanent friend for life whether it be a cat or a
        dog! The current dog and cat up for adoption will be displayed on the
        next screen along with a list of people waiting to adopt.
      </p>
      <h3>How It Works</h3>
      <p>
        As new pets come in, we add them to the end of the list to be adopted.
        Pets that arrive first will be the first up for adoption.
      </p>
      <p>
        People can add their name to the end of the list to sign up and adopt a
        pet. Once you are at the top of the list, you may select either a cat or
        a dog. Be wary that you may only adopt either the cat or dog that is
        currently up for adoption.
      </p>
      <img
        alt="adopt-me"
        onClick={() => adopt()}
        tabIndex= "0"
        src="https://media.kget.com/nxsglobal/kerngoldenempire/feature_pages/Clear-The-Shelters/2020/adopt-a-pet.jpg"
      />
    </div>
  );
}
