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
        designer: "Tinker Hatfield"
      },
      {
        id:uuid.v4(),
        name: "Air Max 90",
        category: "Running",
        designer: "Tinker Hatfeild"
      },
      {
        id:uuid.v4(),
        name: "Converse All Stars",
        category: "Basketball",
        designer: "Chuck Taylor"
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
