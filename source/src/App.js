import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./detail/Maina.js";
import Detail from "./page/detail";
import NavComponent from "./detail/Nav";
import { useEffect, useState } from "react";
import Cart from "./page/cart.js";

import Tryfront from "./detail/newitemBox";
import itemList from "./detail/itemList";

function App() {
  const [jValue, setJvalue] = useState(null);
  const [kValue, setKvalue] = useState(null);
  const [dTitle, setDtitle] = useState(null);
  const [dPrice, setDprice] = useState(null);
  const [mainPage, setMainPage] = useState(false);
  const [indexin, setIndexin] = useState(null);
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);
  return (
    <div>
      <NavComponent setMainPage={setMainPage} />
      <Routes>
        <Route
          path="/*"
          element={
            <Main
              setIndexin={setIndexin}
              mainPage={mainPage}
              setMainPage={setMainPage}
              setDtitle={setDtitle}
              setDprice={setDprice}
              kValue={kValue}
              setKvalue={setKvalue}
              jValue={jValue}
              setJvalue={setJvalue}
            />
          }
        />

        {/* <Route
          path={`food${indexin+1}`}
          element={
              <Tryfront
              setMainPage={setMainPage}
              mainPage={mainPage}
              setIndexin={setIndexin}
              setKvalue={setKvalue}
              setJvalue={setJvalue}
              setDtitle={setDtitle}
              setDprice={setDprice}
            />
            

          }
        ></Route> */}
        <Route
          path={`/food${kValue}/detail${jValue}`}
          element={
            <Detail
              kValue={kValue}
              jValue={jValue}
              dTitle={dTitle}
              dPrice={dPrice}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
