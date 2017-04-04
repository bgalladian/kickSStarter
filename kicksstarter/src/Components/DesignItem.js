import React, { Component } from 'react';


class DesignItem extends Component {

  deleteDesign(id){
    this.props.onDelete(id)
  }

  render() {
    return (
      <li className="designList">
        <img src={this.props.design.imageURL} alt=""/><br /><strong>{this.props.design.name}</strong><br/>
        <strong> Shoe Type:</strong> {this.props.design.category}<br/>
        <strong> Designer: </strong> {this.props.design.designer}<br/>
        <strong> Material: </strong>: {this.props.design.material}  <br />
        <br/>
        <strong>Inspiration: </strong> <br/>
        "{this.props.design.inspiration}"<br />
      <button type="submit" onClick={this.deleteDesign.bind(this, this.props.design.name)}>Delete Design</button>
      </li>
    );
  }
}

DesignItem.propTypes = {
  designs: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default DesignItem;
