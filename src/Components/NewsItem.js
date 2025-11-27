import React, { Component } from 'react'
import '../App.css';
export default class NewsItem extends Component {
  constructor(){
    super();
    this.state={
      isHovering: false
    }
  }
  handleMouseEnter =  () => {
    this.setState({isHovering: true})
  }
  handleMouseLeave = () => {
    this.setState({isHovering: false})
  }
  render() {
    let {title,description,imgUrl,newsUrl,author,date,source, tMode,bgMode,bShadow1,bShadow2}=this.props;
    return (
      <div>
        <div className="card my-2 mx-2" style={{backgroundColor: `${bgMode}`, boxShadow: `5px 5px 6px ${bShadow1}, -5px -5px 6px ${bShadow2}`,border:"none"}}>
          <img src={imgUrl?imgUrl:"https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className={`card-title text-${tMode}`}>{title}...</h5>
              <p className={`card-text text-${tMode}`}>{description}...</p>
              <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
              <p className="card-text"><small className="text-primary fw-bold">{source}</small></p>
              <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{boxShadow: this.state.isHovering? "none":`3px 3px 4px ${bShadow1}, -3px -3px 4px ${bShadow2}`,border:"none"}} onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
