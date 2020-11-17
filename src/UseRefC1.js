//로컬변수 사용 by class
import React, { Component } from "react";

class UseRefC1 extends Component {
  id = 1;
  setId = (n) => {
    this.id = n;
  };
  printId = () => {
    console.log("setId : " + this.id);
  };
  render() {
    return (
      <div>
        - Use Ref Test1 : {this.id}
        {this.setId(3)}
        {this.printId()}
      </div>
    );
  }
}

export default UseRefC1;
