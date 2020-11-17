import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNick = (e) => {
    setNick(e.target.value);
  };

  return (
    <div>
      <div>
        <br />
        <h4>2. useState가 두개 이상인 경우</h4>
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

export default Info;
