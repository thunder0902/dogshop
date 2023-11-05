import { Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./Nav.js";
import ItemBoxList from "./ItemBoxList.js";
import Card from "./Card.js";
import data from "./data.js";
import itemList from "./itemList.js";
import { useEffect, useState } from "react";
import Front from "./frontPage.js";
import Footer from "./footer.js";
import OutLine from "./outline.js";
function Main(props) {
  const [dogFood, setDogFood] = useState(data.data1);
  const [itemBox, setItemBox] = useState(itemList);

  //정렬

  //---
  const mainPage = props.mainPage;
  const setMainPage = props.setMainPage;
  const setJvalue = props.setJvalue;
  const setKvalue = props.setKvalue;
  const kValue = props.kValue;
  const jValue = props.jValue;
  const setDtitle = props.setDtitle;
  const setDprice = props.setDprice;
  const setIndexin = props.setIndexin;
  useEffect(() => {
    return () => {};
  }, [dogFood, itemBox, kValue, setKvalue]);
  return (
    <div>
      <div className="main-bg"></div>


      <Container>
        <div className="itemBox">
          {itemBox.map((item, i) => (
            <ItemBoxList
              setMainPage={setMainPage}
              mainPage={mainPage}
              key={item.name}
              i={i}
              dogFood={dogFood}
              setDogFood={setDogFood}
              setIndexin={setIndexin}
              itemBox={itemBox[i]}
            />
          ))}
        </div>
      </Container>
      <OutLine/>
      {!mainPage &&
        itemBox.map((item, i) => {
          return (
            <Front
              kValue={kValue}
              setDtitle={setDtitle}
              setDprice={setDprice}
              setKvalue={setKvalue}
              setJvalue={setJvalue}
              key={`front-${i}`}
              itemBox={itemBox}
              i={i}
              setDogFood={setDogFood}
              dogFood={dogFood}
            />
          );
        })}
      {mainPage && (
        <Container>
          <div className="sort-btn">
            <button
              onClick={() => {
                let copy = [...dogFood];
                copy.map((a, i) => {
                    copy.sort((a, b) => a.price - b.price)   
                });
                setDogFood(copy);
                console.log(copy);
              }}
            >
              가격낮은순 정렬
            </button>
          </div>
        </Container>
      )}
       {mainPage &&
        itemBox.map((a, i) => (
          <Container key={a.id}>
            <Row>
              <Routes>
                <Route
                  path={"/food" + (i + 1)}
                  element={
                    <Card
                      setDtitle={setDtitle}
                      setDprice={setDprice}
                      setKvalue={setKvalue}
                      setJvalue={setJvalue}
                      i={i + 1}
                      setDogFood={setDogFood}
                      dogFood={dogFood}
                    />
                  }
                ></Route>
              </Routes>
            </Row>
          </Container>
        ))}

      <Footer></Footer>
    </div>
  );
}

export default Main;
