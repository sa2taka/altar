import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@/components/pages/Home';
interface Props {}

export const Routing: React.FC<Props> = () => {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
};
