import React, { Component } from 'react'
export default class Spinner extends Component {
  render() {
    return (
      <div className=" position-absolute right-0 start-50 translate-middle my-3">
        <div className={`spinner-border text-${this.props.tMode}`} role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
    )
  }
}
