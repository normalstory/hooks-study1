import React, { useState, useMemo } from "react";

const getAvg = (num) => {
  console.log("평균 계산 중");
  if (num.length === 0) return 0;
  const sum = num.reduce((a, b) => a + b);
  return sum / num.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onClick = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAvg(list), [list]);

  return (
    <div>
      <div>
        <input
          value={number}
          onChange={onChange}
          placeholder="number.."
        ></input>
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
    </div>
  );
};

export default Average;
