import styled from "styled-components";
import { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import React from "react";
import Footer from "../detail/footer.js";
import Nav from "react-bootstrap/Nav";
import TabChange from "./tab.js";
import { pushBtn } from "../store.js";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changeCnt } from "../store.js";
let Titlediv = styled.h3`
  padding: 20px;
  text-align: center;
`;

function Detail(props) {
  let stock = useSelector((state) => state.stockData);
  let dispatch = useDispatch();
  const dt = props.dTitle;
  const dp = props.dPrice;
  const kValue = props.kValue;
  const jValue = props.jValue;
  const [tab, setTab] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    let out = localStorage.getItem("watched");
    out = JSON.parse(out);
    out.unshift({ kValue, jValue, dt, dp });
    localStorage.setItem("watched", JSON.stringify(out));
  }, []);

  return (
    <div>
      <div>
        <Titlediv>제품 상세페이지</Titlediv>
        <Container>
          <Row>
            <div className="detailBox">
              <div className="detail-img">
                <li>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/${props.kValue}dog${props.jValue}.png`
                    }
                  />
                </li>
              </div>
              <div className="detail-list">
                <li>
                  <h4 className="detail-title">{"상품명: " + dt}</h4>
                </li>
                <li>
                  <h4 className="detail-price">{"상품가격: " + dp + " 원"}</h4>
                </li>
                <li className="btnBox">
                  <Button
                    className="detailBtn"
                    onClick={() => {
                      let idx = 0;
                      if (stock.length == 0) {
                        dispatch(
                          pushBtn({
                            id: jValue,
                            name: dt,
                            price: dp,
                            copy: dp,
                            cnt: 1,
                          })
                        );
                      } else if (stock.length != 0) {
                        for (var i = 0; i < stock.length; i++) {
                          if (stock[i].name == dt) {
                            dispatch(changeCnt(i));
                            idx++;
                          }
                        }
                        if (idx == 0) {
                          dispatch(
                            pushBtn({
                              id: jValue,
                              name: dt,
                              price: dp,
                              copy: dp,
                              cnt: 1,
                            })
                          );
                        }
                      }
                    }}
                    variant="warning"
                  >
                    장바구니
                  </Button>
                  <Button
                    className="detailBtn"
                    variant="danger"
                    onClick={() => {
                      let idx = 0;
                      if (stock.length == 0) {
                        dispatch(
                          pushBtn({
                            id: jValue,
                            name: dt,
                            price: dp,
                            copy: dp,
                            cnt: 1,
                          })
                        );
                      } else if (stock.length != 0) {
                        for (var i = 0; i < stock.length; i++) {
                          if (stock[i].name == dt) {
                            dispatch(changeCnt(i));
                            idx++;
                          }
                        }
                        if (idx == 0) {
                          dispatch(
                            pushBtn({
                              id: jValue,
                              name: dt,
                              price: dp,
                              copy: dp,
                              cnt: 1,
                            })
                          );
                        }
                      }

                      alert(
                        "장바구니에 상품이 담겼습니다. 구매를 위해서 장바구니로 이동합니다."
                      );
                      navigate("/cart");
                    }}
                  >
                    구매하기
                  </Button>
                </li>
              </div>
            </div>
          </Row>
        </Container>
        <Container>
          <Nav
            className="tabMenuStart"
            fill
            variant="tabs"
            defaultActiveKey="link1"
          >
            <Nav.Item
              onClick={() => {
                setTab(0);
              }}
            >
              <Nav.Link eventKey="link-1">상품정보</Nav.Link>
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setTab(1);
              }}
            >
              <Nav.Link eventKey="link-2">배송안내</Nav.Link>
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setTab(2);
              }}
            >
              <Nav.Link eventKey="link-3">상품리뷰</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        <TabChange dt={dt} dp={dp} kValue={kValue} jValue={jValue} tab={tab} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Detail;
