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
        designer: this.refs.designer.value
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
            <label>What you wanna call it?</label>
            <input type="text" ref="name" placeholder="Name of Design" /><br />

            <label>Designer</label>
            <input type="text" ref="designer" placeholder="Name of Designer" /><br />

          <label>Category</label>
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
