import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { pushBtn, changeCnt, pushImgJ } from "../store.js";
import { useSelector, useDispatch } from "react-redux";

// function OutLine(props) {
//   /*리덕스관리*/
//   let stock = useSelector((state) => state.stockData);
//   let pushJ = useSelector((state) => state.navlink);
//   /*스테이트관리*/
//   /*로컬스토리지 관리*/
//   let out = localStorage.getItem("watched");
//   out = JSON.parse(out);

//   //배열관리//
//   let pAry=[];
//   let n = 3;
//   if(out.length!==0){
//    for(var i = 0; i<n;i++){
//       if(out[i]==null){
//         break;
//       }
//       else{
//         pAry[i]=out[i];
//       }
//    }
//   }
// //---------------------------//
// console.log(pAry);
// return (

//     <div className="outLineBox">
//         <h3>최근본상품</h3>
//         {
//           pAry.map((i,item)=>{
//             return(
//               <div key={item}></div>
//             )
//           })
//         }
//     </div>

// )
// }
function OutLine(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let cnt = 0;
  /*리덕스관리*/
  let stock = useSelector((state) => state.stockData);
  let pushJ = useSelector((state) => state.navlink);
  /*스테이트관리*/
  /*로컬스토리지 관리*/
  let out = localStorage.getItem("watched");
  out = JSON.parse(out);
  //배열관리//
  let pAry = [];
  let n = 3;
  if (out !== null) {
    if (out.length !== 0) {
      for (var i = 0; i < n; i++) {
        if (out[i] == null) {
          break;
        } else {
          pAry[i] = out[i];
        }
      }
    }
  }
  //---------------------------//
  return (
    <div className="position">
      <div
        className="openBox"
        onClick={(e) => {
          cnt++;
          let css = document.querySelector(".position");
          css.classList.toggle("active");
          if (cnt % 2 == 1) {
            e.target.innerHTML = "닫기";
          } else {
            e.target.innerHTML = "열기";
          }
        }}
      >
        열기
      </div>
      <div className="lineBox">
        <h5 className="topItem" style={{ textAlign: "center" }}>
          🌟최근본상품🌟
        </h5>
        <div style={{ width: "90%", margin: "auto" }} className="line">
          {pAry.map((item, i) => {
            return (
              <div key={`${i}.${item}`}>
                <div className="inLine" style={{ marginTop: "5px" }}>
                  <img
                    onClick={(e) => {
                      let idx = 0;
                      if (stock.length == 0) {
                        dispatch(
                          pushBtn({
                            id: item.jValue,
                            name: item.dt,
                            price: item.dp,
                            copy: item.dp,
                            cnt: 1,
                          })
                        );
                        alert("해당상품을 장바구니에 담았습니다.");
                      } else if (stock.length != 0) {
                        for (var i = 0; i < stock.length; i++) {
                          if (stock[i].name == item.dt) {
                            dispatch(changeCnt(i));
                            idx++;
                            console.log("같음" + idx);
                          }
                        }
                        if (idx == 0) {
                          dispatch(
                            pushBtn({
                              id: item.jValue,
                              name: item.dt,
                              price: item.dp,
                              copy: item.dp,
                              cnt: 1,
                            })
                          );
                        }
                        alert("해당상품을 장바구니에 담았습니다.");
                      }
                    }}
                    style={{ width: "100%" }}
                    src={process.env.PUBLIC_URL + `/${item.kValue}dog${item.jValue}.png`}
                    alt={`lineImg${i}`}
                  />
                </div>
                <div style={{ textAlign: "center" }}>{item.dt}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OutLine;
