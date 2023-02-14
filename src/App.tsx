import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeTimetable from '../src/pages/RecipeTimetable';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={(<RecipeTimetable />) as React.ReactElement}
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
