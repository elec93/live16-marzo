import React from "react";

class RedBg extends React.Component {
  state = {
    color: "red",
  };

  render() {
    return <div>{this.props.render(this.state.color)}</div>;
    //Versione CHILDREN return <div>{this.props.children(this.state.color)}</div>;

  }
}

export default RedBg;
