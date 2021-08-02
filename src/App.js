import React from "react";
import { Navbar, Home, About, Work, Contact , Exhibition} from "./components";

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <Work/>
      <About />
      <Exhibition />
      <Contact />
    </>
  );
};

export default App;
