import React, { Component } from 'react';

class Docks extends Component {

  render() {
    var { images } = this.props;
    return (
      <div className="docks">
        { images.map((image, i) => {
            return (<button key={i} onClick={() => this.props.action.updateSky(images[i])}> {image.name} </button>)
          })
        }
      </div>
    );
  }
}

export default Docks
