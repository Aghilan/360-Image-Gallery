import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <a-scene>
        <a-assets>
          <img id="city" src="http://www.360p.co.uk/wp-content/uploads/2011/05/360-panoramas-truro-park-3-1200x600.jpg" />
        </a-assets>

        <a-sky id="image-360" radius="10" src="#city"></a-sky>
        <a-entity look-controls></a-entity>

      </a-scene>
    </div>
    );
  }
}

export default App;
