import { Suspense } from "react";
import "./App.css";
import Bottles from "./assets/components/bottles/bottles";

const bottlePromise = fetch('./bottle.json').then(res=>res.json());


function App() {
  return (
    <>
      <h1>Buy Awsome Water Bottle</h1>
      <Suspense fallback={<h3>Bottles are loading.....</h3>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
