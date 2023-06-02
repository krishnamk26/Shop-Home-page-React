import React, { useState } from "react";
import Header from "./component/Header";
import Card from "./component/Card";
import NavBar from "./component/NavBar";
import Card1 from "./component/Card1";
import Card2 from "./component/Card2";
import Card3 from "./component/Card3";
import Card5 from "./component/Card5";

function App() {
  let [cartValue, setCartValue] = useState(0)
  return <>
    <NavBar cartValue={cartValue} />
    <Header />
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Card setCartValue={setCartValue} />
          <Card1 setCartValue={setCartValue}/>
          <Card2 setCartValue={setCartValue}/>
          <Card3 setCartValue={setCartValue}/>
          <Card2 setCartValue={setCartValue}/>
          <Card5 setCartValue={setCartValue}/>
          <Card1 setCartValue={setCartValue}/>
          <Card3 setCartValue={setCartValue}/>
        
        </div>
      </div>
    </section>
  </>
}

export default App;
