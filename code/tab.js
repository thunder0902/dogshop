import { Container, Row, Button } from "react-bootstrap";
import { pushBtn } from "../store.js";
import { useSelector, useDispatch } from "react-redux";
import { changeCnt, sumPrice } from "../store.js";

function TabChange(props) {
  const dt = props.dt;
  const jValue = props.jValue;
  const dp = props.dp;
  const kValue = props.kValue;
  let stock = useSelector((state) => state.stockData);
  let dispatch = useDispatch();
  if (props.tab === 0) {
    return (
      <div className="tabBox">
        <div className="tabBoxInner">
          <h3>안녕하세요 강아지야 입니다.</h3>

          <div className="tabBoxImg">
            <img
              src={
                process.env.PUBLIC_URL +
                `/${props.kValue}dog${props.jValue}.png`
              }
              alt="aa"
            />
            <div className="tabBoxTwo">
              <h5>제품명:{props.dt}</h5>
              <h5>제품가격:{props.dp}원</h5>
              <Button
                className="detailBtn"
                onClick={() => {
                  console.log(dp);
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
            </div>
          </div>
          <h5>
            🏆 우리 상점에서는 건강하고 행복한 강아지를 위한 다양한 제품을
            판매하고 있습니다. 🎉
          </h5>
          <h5>
            🐕 최고 품질의 강아지 사료와 간식을 제공하여 애완견의 건강을
            책임집니다.
          </h5>

          <h5>
            🎾 행복한 시간을 선사할 강아지 장난감과 함께 더욱 즐거운 일상을
            만들어보세요.
          </h5>

          <h5>
            🛁 털 건강에 중요한 애견 샴푸와 목욕 용품으로 사랑스러운 반려견을
            멋지게 손질해보세요.
          </h5>
          <h5>
            📞 문의 사항이 있으시면 언제든지 연락주세요. 우리 상점 직원들이
            친절히 도와드리겠습니다.
          </h5>
        </div>
      </div>
    );
  }
  if (props.tab === 1) {
    return (
      <div className="tabBox">
        <div className="tabBoxInner">
          <h3>📦 배송 안내</h3>
          <h5>
            애견용품 상점을 이용해주셔서 감사합니다.
            <br /> 우리 상점은 고객님들의 만족을 최우선으로 생각하며, <br />{" "}
            원활하고 빠른 배송 서비스를 제공하고 있습니다.
          </h5>
          <h5>🚚 배송 소요 기간</h5>
          <h5>
            주문하신 상품은 평일 기준으로 1~3일 이내에 출고되며,
            <br /> 지역 및 상품에 따라 다소 차이가 있을 수 있습니다.
            <br /> 최대한 빠른 배송을 위해 노력하고 있으며,
            <br /> 주문하신 상품이 발송되면 SMS나 이메일로 알림을 드립니다.
          </h5>
          <h5>🌍 배송 지역</h5>
          <h5>
            우리 상점은 전국 배송을 지원하고 있습니다.
            <br /> 제주도와 도서 산간 지역의 경우 추가 배송비가 발생할 수
            있습니다.
            <br /> 정확한 배송 가능 여부는 주문 시 배송지 정보를 입력하시면
            확인하실 수 있습니다.
          </h5>
          <h5>📃 배송 상태 확인</h5>
          <h5>
            주문하신 상품의 배송 상태를 확인하고 싶으시면,
            <br /> 마이페이지에서 주문 내역을 확인하실 수 있습니다.
            <br /> 배송 준비, 출고, 배송 중, 배송 완료 등의 상태를
            <br /> 실시간으로 조회하실 수 있습니다.
          </h5>
          <h5>📞 문의 사항</h5>
          <h5>
            배송에 관련하여 궁금하신 점이 있으시면 언제든지 고객센터로
            문의해주세요.
            <br /> 친절하고 빠른 응대로 도와드리겠습니다.
          </h5>
          <h5>
            고객님의 소중한 반려견과 함께하는 시간을 보내실 수 있도록 최선을
            다하겠습니다. 감사합니다! 🐶🐾
          </h5>
        </div>
      </div>
    );
  }
  if (props.tab === 2) {
    return (
        <div className="tabBox">
          <div className="tabBoxInner">
            <div className="starBox">등록된 리뷰가 없습니다.</div>
          </div>
        </div>
    );
  }
}

export default TabChange;
