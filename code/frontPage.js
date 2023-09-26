import React, { useEffect, useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import data from "./data.js";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
  // props로 onClick을 전달해줘야 한다.
  return (
    <button onClick={onClick} type="button" className="nextBtn">
      {">"}
    </button>
  );
};
const PrevArrow = ({ onClick }) => {
  // props로 onClick을 전달해줘야 한다.
  return (
    <button onClick={onClick} type="button" className="prevBtn">
      {"<"}
    </button>
  );
};

function Front(props) {
  const navigate = useNavigate();

  //슬릭슬라이더
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: false, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000, // 넘어가는 속도
    slidesToShow: 3, // 4장씩 보이게
    slidesToScroll: 1, // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: "0px",
    arrow: true,
  };

  //----------------
  // 이동할 상품 정보를 관리하는 상태

  const [px, setPx] = useState(0);
  useEffect(() => {
    const copy = [...data[`data${props.i + 1}`]];
    props.setDogFood(copy);
  }, [props.i, props.setDogFood, px]);

  const hanleClick = (e) => {
    props.setKvalue(e);
  };
  const tClick = (e) => {
    props.setDtitle(e);
  };
  const pClick = (e) => {
    props.setDprice(e);
  };
  //let navigate = useNavigate();

  let frontRabel = [
    "건강한 사료만 모아놨어요",
    "건강한 강아지를 위한 맛있는 간식들, 함께 즐겨보세요!",
    "편안한 휴식과 안전한 활동을 위한 강아지 이동장",
    "건강한 털건강을 위한 애견 샴푸!",
    "강아지 장난감, 행복한 시간을 선물하세요!",
  ];
  return (
    <>
      <Container>
        <h5 className="front-food1">{frontRabel[props.i]}</h5>
        <div className="front-imgBox">
          <Slider {...settings}>
            {data[`data${props.i + 1}`].map((item, j) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    hanleClick(props.i + 1);
                    navigate(`/food${props.i + 1}/detail${item.id}`);
                    props.setJvalue(item.id);
                    pClick(item.price);
                    tClick(item.name);
                  }}
                  className="front-imgInner"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + `/${props.i + 1}dog${j + 1}.png`
                    }
                  />
                  {/* <img src={`${props.i + 1}dog${j + 1}.png`} alt="frontImg" /> */}
                  <h4>{item.name}</h4>
                  <p>{item.price}원</p>
                </div>
              );
            })}
            {/* </div> */}
          </Slider>
        </div>
      </Container>
    </>
  );
}

export default Front;
