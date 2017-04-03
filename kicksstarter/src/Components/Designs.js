import React, { Component } from 'react';
import DesignItem from './DesignItem'

class Designs extends Component {
  deleteDesign(id){
    this.props.onDelete(id)
  }

  render() {
    let designItems;
    if(this.props.designs){
        designItems = this.props.designs.map(design => {
          return(
            <DesignItem onDelete={this.deleteDesign.bind(this)} key={design.name}design={design}/>
          )
        })
      }
    return (

      <div className="Designs">
        

        {designItems}
      </div>
    );
  }
}

Designs.propTypes = {
  designs: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Designs;
