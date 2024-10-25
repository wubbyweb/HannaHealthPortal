import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to Hanna Health Portal</h1>
        <Switch>
          <Route path="/" exact>
            <h2>Home</h2>
          </Route>
          <Route path="/about">
            <h2>About</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
