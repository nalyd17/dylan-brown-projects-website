import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-ceramic-100">
      <Header />
      <main className="container mx-auto">
        <Profile />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
    </div>
  );
}

export default App;