import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const ReducerTest1 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nick: "",
  });
  const { name, nick } = state;
  const handleInputChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="name.."
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="nick.."
          name="nick"
          value={nick}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <p>
          이름 : <b>{name}</b>.
        </p>
        <p>
          닉네임 : <b>{nick}</b>.
        </p>
      </div>
    </div>
  );
};

export default ReducerTest1;
