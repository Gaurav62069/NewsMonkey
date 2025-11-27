import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound';

export default class App extends Component {
  
  state={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  constructor(){
    super();
    this.state={
      tMode: "dark",
      bgMode:"#ecf0f3",
      // bShadow1:"#cdd1d3",
      bShadow1:"#6a6c6d",
      bShadow2:"#ffffff",
      bgClr:"#ecf0f3", 
      searchTerm: "",
      
    }
  }
  mode=()=>{
    if(this.state.bgClr==="#ecf0f3"){
      this.setState({
        bgClr:"#080707",
        tMode: "light",
        bgMode:"#080707",
        bShadow1:"#040303",
        bShadow2:"#0c0b0b",
      })
    }
    else{
      this.setState({
        bgClr:"#ecf0f3",
        tMode: "dark",
        bgMode:"#ecf0f3",
        // bShadow1:"#cdd1d3",
        bShadow1:"#6a6c6d",
        bShadow2:"#ffffff",
      })
    }
  }
  onSearchHandler = e => {
    this.setState({searchTerm: e.target.value});
  };
  pageSize=6;
  render(){
    const toSearch = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()); 
    document.body.style.backgroundColor=this.state.bgClr;
    return(
      <BrowserRouter>
        <Navbar tMode={this.state.tMode} bgMode={this.state.bgMode} mode={this.mode} btnText={this.state.btnText} logo={this.state.logo} searchTerm={this.state.searchTerm}
          onSearchHandler={this.onSearchHandler}/>
        <LoadingBar
        waitingTime={500}
        height={2}
        color='#f11946'
        progress={this.state.progress}
      />
      
        <Routes>
            <Route exact path='/' element={<News toSearch={toSearch} searchTerm={this.state.searchTerm} setProgress={this.setProgress} key={"general"} pageSize={this.pageSize} country="us" category={"general"}  tMode={this.state.tMode} bgMode={this.state.bgMode} bShadow1={this.state.bShadow1} bShadow2={this.state.bShadow2} />}/>
            <Route exact path='/business' element={<News toSearch={toSearch} searchTerm={this.state.searchTerm} setProgress={this.setProgress} key={"business"} pageSize={this.pageSize} country="us" category={"business"}  tMode={this.state.tMode} bgMode={this.state.bgMode} bShadow1={this.state.bShadow1} bShadow2={this.state.bShadow2} />}/>
            <Route exact path='/entertainment' element={<News toSearch={toSearch} searchTerm={this.state.searchTerm} setProgress={this.setProgress} key={"entertainment"} pageSize={this.pageSize} country="us" category={"entertainment"}  tMode={this.state.tMode} bgMode={this.state.bgMode} bShadow1={this.state.bShadow1} bShadow2={this.state.bShadow2} />}/>
            <Route exact path='/health' element={<News toSearch={toSearch} searchTerm={this.state.searchTerm} setProgress={this.setProgress} key={"health"} pageSize={this.pageSize} country="us" category={"health"}  tMode={this.state.tMode} bgMode={this.state.bgMode} bShadow1={this.state.bShadow1} bShadow2={this.state.bShadow2} />}/>
            <Route exact path='/science' element={<News toSearch={toSearch} searchTerm={this.state.searchTerm} setProgress={this.setProgress} key={"science"} pageSize={this.pageSize} country="us" category={"science"}  tMode={this.state.tMode} bgMode={this.state.bgMode} bShadow1={this.state.bShadow1} bShadow2={this.state.bShadow2} />}/>
            <Route exact path='/sports' element={<News toSearch={toSearch} searchTerm={this.state.searchTerm} setProgress={this.setProgress} key={"sports"} pageSize={this.pageSize} country="us" category={"sports"}  tMode={this.state.tMode} bgMode={this.state.bgMode} bShadow1={this.state.bShadow1} bShadow2={this.state.bShadow2} />}/>
            <Route exact path='/technology' element={<News toSearch={toSearch} searchTerm={this.state.searchTerm} setProgress={this.setProgress} key={"technology"} pageSize={this.pageSize} country="us" category={"technology"}  tMode={this.state.tMode} bgMode={this.state.bgMode} bShadow1={this.state.bShadow1} bShadow2={this.state.bShadow2} />}/>
            <Route path="*" element={<NotFound tMode={this.state.tMode}/>} status={404}/>
        </Routes>
      </BrowserRouter>
    )
  }
}



