import React, { Component } from 'react';

class Docks extends Component {

  render() {
    var { images } = this.props;
    return (
      <div className="docks">
        { images.map((image, i) => {
            return (
              <section key={i} onClick={() => this.props.action.updateSky(images[i])} className="t-cards">
                <div className="container docks1">
                    <div className="row">
                         <div>
                            <div className="panel panel-default panel-card">
                                <div className="panel-heading">
                                    <img alt="" src={image.pano} crossOrigin="anonymous" />
                                </div>
                                <div className="panel-body text-center">
                                    <h4 className="panel-header"><a>{image.name}</a></h4>
                                </div>
                            </div>
                		</div>
            	    </div>
                </div>
            </section>
            )
          })
        }
      </div>
    );
  }
}

export default Docks
