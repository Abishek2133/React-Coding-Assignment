import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHome from 'C:/Users/abish/OneDrive/Documents/React js Files/todo-list/src/Header/NewHome.js';

const Home = lazy(() => import('C:/Users/abish/OneDrive/Documents/React js Files/todo-list/src/Header/NewHome.js'));
const About = lazy(() => import('C:/Users/abish/OneDrive/Documents/React js Files/todo-list/src/Pages/About.js'));

const LazyApp = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<NewHome/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);

export default LazyApp;