import React from 'react';
import './App.scss';
import { BusinessGoals } from './components/BusinessGoals';
import { Header } from './components/Header';
import { Subscribe } from './components/Subscribe';

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <Subscribe />
      <BusinessGoals />
    </main>
  );
};

export default App;
