import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "./data.js";
function Card(props) {
  const hanleClick = (e) => {
    props.setKvalue(e);
  };
  const tClick = (e) => {
    props.setDtitle(e);
  };
  const pClick = (e) => {
    props.setDprice(e);
  };
  let dogFood = props.dogFood;
  useEffect(() => {

  }, [props.i, props.setFoody]);
  //let copy = [...data[`data${props.i}`]];
  let navigate = useNavigate();
  // data[`data${props.i}`]
  return (
    <>
      {dogFood.map((item, j) => {
        return (
          <div
            onClick={() => {
              navigate(`detail${item.id}`);
              props.setJvalue(item.id);
              hanleClick(props.i);
              pClick(item.price);
              tClick(item.name);
            }}
            key={j}
            className="card-box"
          >
            <div className="f-img">
              <img
                src={process.env.PUBLIC_URL + `/${props.i}dog${item.id}.png`}
                alt="dogfood"
              />
              <h4>{item.name}</h4>
              <p>{item.price}원</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
