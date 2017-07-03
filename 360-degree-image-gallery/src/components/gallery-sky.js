import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imageActions from '../actions';
import Docks from './gallery-docks'

class GallerySky extends Component {

  componentWillMount() {
    this.props.action.getImages();
  }

  render() {
    var imageName = this.props.skyImage.name
    return (
      <div>
        {
          (imageName)?
            (<a-scene>
              <img alt="" id={imageName.split(" ")[0]} src={'https://cors-anywhere.herokuapp.com/'+this.props.skyImage.pano} crossOrigin="Anonymous" />
              <a-sky id="image-360" radius="10" src={'#'+imageName.split(" ")[0]}></a-sky>
              <a-entity look-controls></a-entity>
            </a-scene>) : null
        }
        <Docks
          {...this.props}/>
      </div>
    );
  }
}


/*
Redux Containers - To map the components to store
*/

function mapStateToProps(state){
  return {images: state.images, skyImage: state.skyImage};
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(imageActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GallerySky);
