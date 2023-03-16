import React, { Component } from "react";
import WithRedBg from "../WithRedBg";

class Children extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div style={{ background: this.props.color }}>{this.props.children}</div>
    );
  }
}

export default WithRedBg(Children);

//APP
import React from "react";
import Children from "./comp/Children";
import RedBg from "./RedBg";



class App extends React.Component {
  render() {
    return (
      <div>
        <RedBg render= {(color)=>{return <div style={{background: color}}>ciao</div>}}/>
        {/*Versione CHILDREN <RedBg>{(color)=>{return <div style={{background: color}}>ciao</div>}}</RedBg> */}
        </div>
    );
  }
}

export default App;
