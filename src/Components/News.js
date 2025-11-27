import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  static defaultProps ={
    country: "in",
    pageSize: 9,
    category: "science"
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstletter(word){
    const lower =word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  constructor(props){
    super(props);
    this.state ={
      articles: [],
      loading: true,
      page:1,
      totalResults:0,
    }
    document.title = `${this.capitalizeFirstletter(this.props.category)} - NewsMonkey`;
  }
  async componentDidMount(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url)
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false});
    this.props.setProgress(100);
  }
  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults}) 
  };
  render(){
    let {tMode,bgMode,bShadow1,bShadow2}=this.props;
    return (
      <>
        <h1 className={`text-${tMode} text-center`} style={{margin:"30px 0px"}}>NewsMonkey - top {this.capitalizeFirstletter(this.props.category)} Headlines</h1>
          {this.state.loading &&<Spinner tMode={tMode}/>}
          <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length!== this.state.totalResults}
              loader={<Spinner tMode={tMode}/>}
              >
            <div className="container">
              <div className="row my-2">
                { this.state.articles.filter(this.props.toSearch(this.props.searchTerm)).map((element,index)=>{
                  return  <div className="col-md-4" key={index}>
                            <NewsItem  title={element.title?element.title.slice(0,45):""} description ={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} tMode={tMode} bgMode={bgMode} bShadow1={bShadow1} bShadow2={bShadow2}/>
                          </div>
              })}
              </div>
            </div>
          </InfiniteScroll>
      </>
    )
  }
}
