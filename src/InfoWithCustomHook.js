import React from "react";
import useInputs from "./useInputs";

const InfoWithCustomHook = () => {
  const [state, onChange] = useInputs({
    name: "",
    nick: "",
  });
  const { name, nick } = state;

  return (
    <div>
      <div>
        <br />
        <h4>9. useState가 두개 이상인 경우</h4>
        <input
          type="text"
          name="name"
          value={name}
          //onClick={handleName}
          onChange={onChange}
          placeholder="input your name.."
        />
        <input
          type="text"
          name="nick"
          value={nick}
          onChange={onChange}
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

export default InfoWithCustomHook;
