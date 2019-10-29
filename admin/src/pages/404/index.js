import React, { Component } from "react";
import { incMenu } from "../../layout";

class index extends Component {
  state = {
    time:5
  }
  componentDidMount() {
    
    window.time404 = setInterval(()=>{
      if(this.state.time>1){
        this.setState({
          time:this.state.time - 1
        })
      }else{
        clearInterval(window.time404);
        setTimeout(()=>{ 
          this.props.push('/')
        }, 10)
      } 
    }, 1000);
  }
  render() {
    const { time } = this.state;
    return (
      <div>
        <div
          style={{
            fontSize: "140px",
            color: "#ccc",
            textAlign: "center",
            marginTop: "30px"
          }}
        >
          404
          <p
            style={{
              fontSize: "16px"
            }}
          >
            {" "}
            未找到该页面：
            {this.props.location.pathname}
            <br />
            即将返回首页    
            <b>{time}s</b>
          </p>
        </div>
      </div>
    );
  }
}
export default incMenu(index);
