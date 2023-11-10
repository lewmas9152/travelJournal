import { useState } from "react";
import "./App.css";
import Card from "./Card";
import data from "./Data";
import Nav from "./Nav";

function App(props) {

  const cards =  data.map((items)=>{
   return( <Card
        key = "{item.id}"
        item = {items}
    />);
  });
  return (
    <main>
      <Nav />
      {cards}
    </main>
  );
}

export default App;
