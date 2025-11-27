import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
    <div className="container" style={{margin:"5rem auto",textAlign:'center'}}>
        <h1 className={`text-${this.props.tMode}`} style={{fontSize:"10rem",fontWeight:"bold"}}>Oops!</h1>
        <h6 className={`text-${this.props.tMode} my-3`} style={{fontSize:"1.5rem",fontWeight:"500"}}>404 - Page Not Found</h6>
        <button type="button" className="btn btn-dark btn-sm rounded-pill p-2 px-3" style={{fontSize:"12px"}}><Link to={"/"} style={{textDecoration:"none", color:"white"}}>Go To Homepage</Link></button>
    </div>
    )
  }
}
