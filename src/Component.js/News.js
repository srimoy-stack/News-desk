import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';



export default class News extends Component {

    articles = [
        
      ];


      capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props){
        super(props);

    this.state={
      articles : this.articles,
      loading : false,
      page:1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- News Desk`
    }

  async componentDidMount(){
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=439bab1ae45f40fcbc33e1563805b2a3&page=1&pagesize=${this.props.pagesize}`;
      this.setState ({loading : true})
       let data = await fetch(url);

       let parsedData = await data.json()

       console.log(parsedData);
       this.setState({ articles:  parsedData.articles,totalResults:parsedData.totalResults,
        loading : false})
          }

          handelPreviousClick=async()=>{


            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=439bab1ae45f40fcbc33e1563805b2a3&page=${ this.state.page - 1}&pagesize=${this.props.pagesize}`;
            this.setState ({loading : true})
            let data = await fetch(url);
     
            let parsedData = await data.json()
     
            console.log(parsedData);
            this.setState({ articles:  parsedData.articles,
        loading : false,
        page: this.state.page -1})
            
              
          }

          handelNextClick=async()=>{

            if (this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)){

            }
            else{

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=439bab1ae45f40fcbc33e1563805b2a3&page=${ this.state.page + 1}&pagesize=${this.props.pagesize}`;
            this.setState ({loading : true})
            let data = await fetch(url);
     
            let parsedData = await data.json()
     
            console.log(parsedData);
            this.setState({ articles:  parsedData.articles,
              loading : false,
              page: this.state.page +1})
            
           
          }}

        
      

    render() {
        return (
            <div className='container  my-5'>
                <h1 className='text-center' style={{margin:"35px 0px", marginTop:"90px"}}> News Desk - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {  this.state.loading && <Spinner/>}

             <div className="row">
                 {!this.state.loading && this.state.articles.map((element) => {

                   return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}newsUrl={element.url}author={element.author}date={element.publishedAt}source={element.source.name}/>
                        </div>


                 })}
                     

                   
                    </div>
                    <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1}type="button" className="btn btn-dark" onClick={this.handelPreviousClick}> &larr; Previous</button>
                    <button  disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize) }type="button"className="btn btn-dark" onClick={this.handelNextClick}
                    >Next &#8594;</button>
                    </div>

            </div>
        
        )
    }
  }

