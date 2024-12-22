import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Profile />
        <Skills />
        <Experience />
        <Education />
      </main>
    </div>
  );
}

export default App;