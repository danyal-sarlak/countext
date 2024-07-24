import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import ShowInfo from "./Components/ShowInfo";
import Navbar from "./Components/Navbar";
import { UserNameContext } from "./Countexts/UserNameContext";

const App = () => {
  const [contextValue, setContextValue] = useState({
    firstName: "",
    lastName: "",
    age: "",
    inventory: ""
  });

  return (
    <BrowserRouter>
      <UserNameContext.Provider value={{ contextValue, setContextValue }}>
        <Navbar />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/showinfo" element={<ShowInfo />} />
        </Routes>
      </UserNameContext.Provider>
    </BrowserRouter>
  );
};

export default App;
