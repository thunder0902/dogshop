import { configureStore, createSlice } from "@reduxjs/toolkit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./page/detail";


let stockData = createSlice({
  name: "stockData",
  initialState: [],
  reducers: {
    changeCnt(state, action) {
      state[action.payload].cnt++;
      state[action.payload].price =state[action.payload].price + state[action.payload].copy;
      //a.stockData[i].cnt++
    },
    changeMinusCnt(state, action) {
      state[action.payload].cnt--;
      state[action.payload].price =state[action.payload].price - state[action.payload].copy;
    },
    pushBtn(state, action) {
      state.push(action.payload);
    },
    sumPrice(state,action){
      state[action.payload].price =state[action.payload].price + state[action.payload].copy;
      console.log(state[action.payload].copy)
    },
    removeBtn(state,action){
      state.splice(action.payload, 1);
    },
    removeAllBtn(state,action){
      state.splice(action.payload,state.length);
    }
  },
});

let navlink = createSlice({
  name: "navlink",
  initialState: [],
  reducers: {
    pushImgJ(state,action){
      state.unshift(action.payload);
    }

  }
});

export let { changeCnt, pushBtn, changeMinusCnt ,sumPrice,removeBtn,removeAllBtn} = stockData.actions;
export let {pushImgJ} = navlink.actions;

export default configureStore({
  reducer: {
    stockData: stockData.reducer,
    navlink: navlink.reducer,
  },
});
