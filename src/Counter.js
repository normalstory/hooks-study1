import React, { useState } from "react";
import Info from "./Info";
import EffectTest from "./EffectTest";
import ReducerTest from "./ReducerTest";
import ReducerTest1 from "./ReducerTest1";
import Average from "./Average";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <h4>1. useState가 하나인 경우</h4>
        <p>
          현재 카운트 값은 <b>{value}</b>입니다
        </p>
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
      <br />
      <Info />
      <div>
        <br />
        <h4>3. useEffect by Hook</h4>
        <p>
          마운트와 업데이트 각각의 마지막 라이프서클에 해당하는
          <br />
          componentDidMount와 componentDidUpdate를 합친 기능과 유사함
        </p>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
        {visible && <EffectTest />}
      </div>
      <div>
        <br />
        <h4>4. useReducer***</h4>
        <p>
          리덕스 reducer와 달리 type필드가 없어도 되고 객체가 아닌 문자열이나
          숫자도 가능
        </p>
        <ReducerTest />
      </div>
      <div>
        <br />
        <h4>5. useReducer-인풋상태 관리하기***</h4>
        <p></p>
        <ReducerTest1 />
      </div>
      <div>
        <br />
        <h4>6. useMemo</h4>
        <p></p>
        <Average />
      </div>
    </div>
  );
};

export default Counter;
