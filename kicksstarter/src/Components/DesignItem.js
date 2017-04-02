import React, { Component } from 'react';


class DesignItem extends Component {

  deleteDesign(id){
    this.props.onDelete(id)
  }

  render() {
    return (
      <li className="Designs">
        <strong>{this.props.design.name}</strong> | Shoe Type: {this.props.design.category} | Designer: {this.props.design.designer}<br />
           <button type="submit" onClick={this.deleteDesign.bind(this, this.props.design.id)}>Delete Design</button>
      </li>
    );
  }
}

DesignItem.propTypes = {
  designs: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default DesignItem;
