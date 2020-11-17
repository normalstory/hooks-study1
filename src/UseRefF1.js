import React, { useRef } from "react";

const UseRefF1 = () => {
  const id = useRef(1); //01 ref 변수 선언
  const setId = (n) => {
    id.current = n; //02 ref변수를 current로 호출해서 사용
  };
  const printId = () => {
    // console.log("RefSetId : " + this.id);
    console.log("RefSetId : " + id.current); //03 불러올때도 current로 호출
  };
  return (
    <div>
      - Use Ref Test1 : {id.current}
      {setId(3)}
      {printId()}
    </div>
  );
};

export default UseRefF1;
