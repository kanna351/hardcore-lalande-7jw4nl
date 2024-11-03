import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Search from './pages/Search'; // Create a Search component for the search functionality

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username); // Store user data (in real apps, manage with context or redux)
  };

  return (
    <Router>
      <Switch>
        <Route path="/search">
          {user ? <Search /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/">
          <Login onLogin={handleLogin} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
