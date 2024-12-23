import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-ceramic-50">
      <Header />
      <main>
        <Profile />
        <Experience />
        <Skills />
        <Education />
      </main>
    </div>
  );
}

export default App;