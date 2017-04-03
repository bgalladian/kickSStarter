import React, { Component } from 'react';
import DesignItem from './DesignItem'
import uuid from 'uuid'

class AddDesign extends Component {
  constructor(){
    super()
    this.state={
      newDesign:{}
    }
  }

  static defaultProps = {
    categories: ['Basketball', 'Running', 'Life Style']
  }

  handleSubmit(e){
    e.preventDefault()
    if(this.refs.name.value === ""){
      alert("Please name your design!")
    }else {
      this.setState({newDesign:{
        id: uuid.v4(),
        name: this.refs.name.value,
        category: this.refs.category.value,
        designer: this.refs.designer.value,
        imageURL: this.refs.imageURL.value,
        material: this.refs.material.value,
        inspiration: this.refs.inspiration.value
      }}, function (){
        this.props.addDesign(this.state.newDesign)
      })
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div >
        <h3>Add Design</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>

            <input type="text" ref="name" placeholder="Name of Design" /><br />
            <input type="text" ref="designer" placeholder="Name of Designer" /><br />
            <input type="text" ref="imageURL" placeholder="Image URL" /><br />
            <input type="text" ref="material" placeholder="What is it made out of?" /><br />
            <textarea ref="inspiration" placeholder="What inspired this design?" /><br />


          <select ref="category">
            {categoryOptions}

          </select>
          </div>
          <input type="submit" value="Add Design" />
        </form>
        <hr />
      </div>
    );
  }
}

export default AddDesign;
