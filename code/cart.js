import Table from "react-bootstrap/Table";
import { Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeCnt, changeMinusCnt, removeBtn,removeAllBtn } from "../store.js";
import { useNavigate} from "react-router-dom";

function Cart() {
  const stockData = useSelector((state) => state.stockData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let sum = 0;

  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        <h3>고객님의 장바구니 입니다</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>가격</th>
              <th>수량변경</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.cnt}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        dispatch(changeCnt(i));
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        dispatch(changeMinusCnt(i));
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(removeBtn(i));
                      }}
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {stockData.map((item, i) => {
          sum = sum + item.price;
          if(item.price==0||item.price<0){
            alert("수량을 다시 확인하여주세요");
          }
        })}
        <div className="totalBox">
          <h3>
            총가격:{sum}원{" "}
            <Button onClick={() => {
              if (sum === 0 || sum < 0 ) {
                alert("수량을 다시 확인하여주세요");
              }
              else{
                alert("구매가 완료되었습니다. 감사합니다.");
                dispatch(removeAllBtn());
                navigate("/")
                let out = localStorage.getItem('watched');
                out = JSON.parse(out)
                out = []
                localStorage.setItem('watched',JSON.stringify(out));
              }
            }} className="detailBtn2" variant="danger">
              구매하기
            </Button>
          </h3>
        </div>
      </Container>
    </div>
  );
}

export default Cart;