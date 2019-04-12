import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  render() {
    const { colors } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/colors" render={() => <ColorList colors={colors} />} />
          {
            colors.map(color => (
              <Route
                key={color.name}
                exact
                path={`/colors/${color.name}`}
                render={() => <Color color={color} />}
              />
              ))}
          <Route exact path="/colors/addNew" render={props => <NewColor addColor={this.handleAdd} {...props} />} />
          <Redirect to="/colors" />
        </Switch>
      </Router>
    );
  }
}

export default App;
