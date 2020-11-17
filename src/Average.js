import React, { useState, useMemo, useCallback, useRef } from "react";

const getAvg = (num) => {
  console.log("평균 계산 중");
  if (num.length === 0) return 0;
  const sum = num.reduce((a, b) => a + b);
  return sum / num.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputE1 = useRef(null); //01 ref 변수 선언

  //   const onChange = (e) => {
  //     setNumber(e.target.value);
  //   };
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 랜더링될때만 함수 생성

  //   const onClick = (e) => {
  //     const nextList = list.concat(parseInt(number));
  //     setList(nextList);
  //     setNumber("");
  //   };
  const onClick = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputE1.current.focus(); //useRef를 이용한 포커스 이동, ref변수를 current로 호출해서 사용
    },
    [number, list]
  ); //number 혹은 list만 바뀌었을때만 함수 생성

  const avg = useMemo(() => getAvg(list), [list]);

  /**useCallback(fn, deps)은 useMemo(()=>fn, deps)와 같다 */
  const t1 = useCallback(() => {
    console.log("hello useCallback~");
  }, []);

  const t2 = useMemo(() => {
    const fn = () => {
      console.log("hello useMemo");
    };
    return fn;
  }, []);

  return (
    <div>
      <div>
        <input
          value={number}
          onChange={onChange}
          placeholder="number.."
          ref={inputE1}
        />
        <button onClick={onClick}>등록</button>
      </div>
      <div>
        <p>더한 목록</p>
        <ul>
          {list.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <p>
          {/* 평균값 : <b>{getAvg(list)}</b> //useMemo 사용전 */}
          평균값 : <b>{avg}</b>
        </p>
      </div>
      {t1()}
      {t2()}
    </div>
  );
};

export default Average;
