import React, { useState, useEffect } from "react";

const EffectTest = () => {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");

  // useEffect(() => {
  //   //useEffect 1 = componentDidMount + componentDidUpdate
  //   // console.log("마운트 결과 출력 .");
  //   // console.log({
  //   // //업데이트 결과 출력
  //   //   name,
  //   //   nick,
  //   // });

  //   //useEffect 2 마운트될때만 이펙트 실행하려면,
  //   console.log(
  //     "함수의 두번째 param에 빈 배열 추가"
  //   );
  // }, []);

  //useEffect 3 업데이트될때만 실행
  // useEffect(() => {
  //   console.log("업데이트 결과 : " + name);
  // }, [name]);

  //useEffect 4 마운트 또는 업데이트 '직전'에 실행
  useEffect(() => {
    console.log("-effect-");
    console.log(name);
    return () => {
      console.log("-clean up-");
      console.log(name);
    };
  }, []); //언마운트 될때만 호출하려면, 함수의 두번째 param에 빈 배열 추가

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNick = (e) => {
    setNick(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          //onClick={handleName}
          onChange={handleName}
          placeholder="input your name.."
        />
        <input
          type="text"
          value={nick}
          onChange={handleNick}
          placeholder="input your nick.."
        />
      </div>
      <div>
        <p>
          name : <b>{name}</b>
        </p>
        <p>
          nick : <b>{nick}</b>
        </p>
      </div>
    </div>
  );
};

export default EffectTest;
