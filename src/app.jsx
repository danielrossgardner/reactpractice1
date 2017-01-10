import React from 'react';
import {render} from 'react-dom';

import BaseComponent from './shared/BaseComponent/BaseComponent.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
              <h1>App Component</h1>
              <BaseComponent />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));