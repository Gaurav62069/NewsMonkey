import React from 'react'
import '../App.css';
import { Link, useLocation } from "react-router-dom"

export default function Navebar(props){
   
    let{bgMode,tMode,mode,onSearchHandler,searchTerm}=props;
    let search=document.getElementById("search");
     let location = useLocation();
    return (
      
      <nav className={`navbar navbar-expand-lg shadow-sm position-sticky top-0 `} style={{backgroundColor: `${bgMode}`,zIndex:'2'}}>
        <div className="container-fluid " >
          <Link className={`navbar-brand text-${tMode} `} to="/">NewsMonkey</Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon " style={{filter:bgMode==='#ecf0f3'?"invert(0%)":"invert(100%)"}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <Link className={`nav-link text-${tMode} ${
                    location.pathname === "/" ? "active" : ""
                  }`} aria-current="page" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${tMode}  ${
                    location.pathname === "/entertainment" ? "active" : ""
                  }`} to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${tMode}  ${
                    location.pathname === "/business" ? "active" : ""
                  }`} to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${tMode}  ${
                    location.pathname === "/health" ? "active" : ""
                  }`} to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${tMode}  ${
                    location.pathname === "/science" ? "active" : ""
                  }`} to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${tMode}  ${
                    location.pathname === "/sports" ? "active" : ""
                  }`} to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${tMode}  ${
                    location.pathname === "/technology" ? "active" : ""
                  }`} to="/technology">Technology</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <span className="d-flex my-2 mx-3" onClick={()=>{if(search.style.display==="block"){search.style.display="none"; } else {search.style.display="block";search.focus()}}} id="search-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{cursor:"pointer",filter:bgMode==='#ecf0f3'?"invert(0%)":"invert(100%)"}}>
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </span>
              <input className={`form-control me-2 text-${tMode}`} id='search' type="search" autoFocus aria-label="Search" value={searchTerm} onChange={onSearchHandler} placeholder="Search"
                style={{
                  borderBottomStyle: "groove",
                  borderTopStyle: 'hidden',
                  borderLeftStyle: 'hidden',
                  borderRightStyle:'hidden',
                  backdropFilter: "blur(0px) saturate(0.5)",
                  backgroundColor: "rgba(0,0,0,0.00)",
                  borderRadius: "0px",
                  display:"none"
                }}/>
            </form>
            <div className=" mt-2">
              <input type="checkbox" id='theme-toggle' onClick={mode} />
              <label htmlFor="theme-toggle"></label>
            </div>
          </div> 
        </div>
      </nav>
    
    )
  }

