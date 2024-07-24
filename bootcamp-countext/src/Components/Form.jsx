// src/Components/Form.jsx
import React, { useContext } from "react";
import { UserNameContext } from "../Countexts/UserNameContext";

export default function Form() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [inventory, setInventory] = React.useState("");

  const { setContextValue } = useContext(UserNameContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setContextValue({ firstName, lastName, age, inventory });
    console.log("Submitted Data:", { firstName, lastName, age, inventory });
  };

  return (
    <div className="flex justify-center">
      <form
        className="w-[400px] h-[300px] shadow-xl bg-orange-200 flex justify-center flex-col gap-3"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          className="mx-3 p-2"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          className="mx-3 p-2"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <input
          type="text"
          className="mx-3 p-2"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <input
          type="text"
          className="mx-3 p-2"
          placeholder="Inventory"
          onChange={(e) => setInventory(e.target.value)}
          value={inventory}
        />
        <button
          className="p-3 bg-slate-400 mx-4 border border-black"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
