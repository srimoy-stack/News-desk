import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let{title,description,imageUrl,newsUrl,author,date,source} = this.props;


        return (
            <div className='my-4'>
               <div className="card" >
               <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:"90%",zIndex:"1"}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
  <img src= {!imageUrl?"https://img.jakpost.net/c/2021/12/22/2021_12_22_120754_1640172080._large.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ title} </h5>
    <p className="card-text">{description} ...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
            </div>
        )
    }
}
