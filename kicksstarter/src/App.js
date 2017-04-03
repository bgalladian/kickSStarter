import React, { Component } from 'react';
import Designs from "./Components/Designs"
import AddDesign from "./Components/AddDesign"
import uuid from 'uuid'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      designs: []
    }
  }


  componentWillMount(){
    this.setState({designs: [
      {
        id:uuid.v4(),
        name: "Jordan 3",
        category: "Basketball",
        designer: "Tinker Hatfield",
        imageURL: "https://www.flightclub.com/media/catalog/product/a/i/air-jordan-3-retro-bg-gs-infrared-23-white-blackwlf-grey-infrrd-23-011880_1.png",
        material: "Leather upper, rubber sole",
        inspiration: "The inspirations for the AJ III are AJ I and II, the free throw dunk, an elephant, and last, but not least Michael Jordan. Nike’s selling strategy was simple, and great, they had MJ and Mars Blackmon (Spike Lee). After watching these funny commercials you had to go out and buy yourself a pair."
      },
      {
        id:uuid.v4(),
        name: "Air Max 90",
        category: "Running",
        designer: "Tinker Hatfeild",
        imageURL: "https://www.flightclub.com/media/catalog/product/6/3/63611743058-nike-ws-air-max-90-essential-wolf-grey-infrared-black-white-053022_1.jpg",
        material: "Leather mid, rubber sole",
        inspiration: "I wanted to make a running shoe, that also looked fast!"

      },
      {
        id:uuid.v4(),
        name: "Converse All Stars",
        category: "Basketball",
        designer: "Chuck Taylor",
        imageURL: "https://pmcfootwearnews.files.wordpress.com/2014/12/original-chuck-taylor-all-star.jpg?w=1170",
        material: "Canvas, and rubber sole",
        inspiration: "As a salesman and athlete for the company, Taylor also made improvements to the shoe he loved. His ideas for the shoe were designed to provide enhanced flexibility and support and also incorporated a patch to protect the ankle."
      }
    ]})
 }



 handleAddDesign(design){
   let designs = this.state.designs
   designs.push(design)
   this.setState({designs:designs})
 }

 handleDeleteDesign(id){
   let designs = this.state.designs
   let index = designs.findIndex(x => x.id === id)
   designs.splice(index, 1)
   this.setState({designs:designs})
 }

  render() {
    return (
      <div className="App">
        <AddDesign addDesign={this.handleAddDesign.bind(this)}/>
        <Designs designs={this.state.designs} onDelete={this.handleDeleteDesign.bind(this)}/>
      </div>
    );
  }
}

export default App;
