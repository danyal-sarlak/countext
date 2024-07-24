import React, { useContext } from 'react';
import { UserNameContext } from '../Countexts/UserNameContext'; 

export default function ShowInfo() {
  const { contextValue } = useContext(UserNameContext);

  

  const { firstName, lastName, age, inventory } = contextValue;

  return (
    <div>
      <h2>Show Info</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
      <p>Inventory: {inventory}</p>
    </div>
  );
}

