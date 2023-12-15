import { Main } from "./components/Main";
import { Navigation } from "./components/Navigation";
import { useState } from "react";

function App() {
  const [ toggleNav, setToggleNav ] = useState(false);

  return (
    <>
      <Navigation toggleNav={toggleNav} />
      <Main toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </>
  )
}

export default App;