import React from "react";

function WithRedBg(Component) {
  return class extends React.Component {
    state = {
      color: "red",
    };

    
    render() {
      return (
        <div>
          <Component {...this.props} color={this.state.color} />
        </div>
      );
    }
  };
}

export default WithRedBg;
