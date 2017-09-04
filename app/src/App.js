import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state={
      bundleOfGifs: [],
      value:'',
      baseUrl2: "&api_key=a8bab39f36044617bc4d97998b2815e4&limit=50&offset=0&rating=PG-13&lang=en",
      baseUrl: "http://api.giphy.com/v1/gifs/search?q="
    };
  }

  handleChange(newSearchTerm){
    this.setState({value: newSearchTerm});
  }

  handleClick(){
    axios.get( this.state.baseUrl + this.state.value + this.state.baseUrl2 )
    .then((response) => {
      this.setState({
        value: "enter GIF search",
        bundleOfGifs: response.data.data 
      })
    })
  }


 componentDidMount(){
  var urlUpdater= this.baseUrl + this.newSearchTerm + this.baseUrl2;
  console.log(urlUpdater);
  axios.get(urlUpdater)
  .then((response) => { 
    this.setState({
      bundleOfGifs:response.data.data
    });
  });
 }
  
 
 render() {
 const gifs = this.state.bundleOfGifs.map((gif)=> {
   return (<img src={gif.images.fixed_height_downsampled.url} alt={gif.slug} key={gif.id}/>)
  })

    return (
      <div>
        <div className="div4">
          <img className="img1" src="https://i.giphy.com/media/YJBNjrvG5Ctmo/200_s.gif"/>
          </div>
        <div className="input-wrapper">
          <div className="div3">
            <h1 className="title">Welcome to Giphy search </h1>
            <input type="text" className="box" value={this.state.value} onChange={(event) => {this.handleChange(event.target.value)}}/>
            <button type="button" className="btn btn-primary" onClick={() => {this.handleClick()} }>submit</button>
          </div>
          <div>
            {gifs}
          </div>
        </div>
      </div>

      


    );
    }
  }


export default App;
