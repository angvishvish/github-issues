import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/Header';

import IssuesList from './IssuesList';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={IssuesList} />
      </BrowserRouter>

    </div >
  );
};

export default App;
