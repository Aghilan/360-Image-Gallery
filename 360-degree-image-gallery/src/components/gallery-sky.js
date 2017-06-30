import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imageActions from '../actions';

class GallerySky extends Component {

  componentWillMount() {
    this.props.action.getImages();
  }
  render() {

    return (
      <div>
        <a-scene>
          <a-assets>
            <img id="park" crossOrigin="anonymous" alt="Park" src="http://www.360p.co.uk/wp-content/uploads/2011/05/360-panoramas-truro-park-3-1200x600.jpg" />
          </a-assets>
          <a-sky id="image-360" radius="10" src="#park"></a-sky>
          <a-entity look-controls></a-entity>
        </a-scene>
      </div>
    );
  }
}


/*
Redux Containers - To map the components to store
*/

function mapStateToProps(state){
  return {images: state.images};
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(imageActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GallerySky);
