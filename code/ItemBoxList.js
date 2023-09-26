import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import data from "./data.js";

function ItemBoxList(props) {
  let navigate = useNavigate();
  let switchPage = props.setMainPage;
  useEffect(()=>{
  },[])

  function on() {
    switchPage(true);
  }
  return (
    <div
      onClick={() => {
        let copy = [...data[`data${props.i + 1}`]];
        props.setDogFood(copy);
        navigate(`/food${props.i + 1}`);
        on();
      }}
      className="list-box"
    >
      <Col className="i-img">
        <div className="itemCover">
          <div className="itemRound">
            <img src={process.env.PUBLIC_URL + "/item" + (props.i + 1) + ".png"} /> 
          </div>
        </div>
        <p>{props.itemBox.name}</p>
      </Col>
    </div>
  );
}

export default ItemBoxList;
