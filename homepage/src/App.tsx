import React from 'react';
import { Header} from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { About} from './components/sections/About';
import { Skills} from './components/sections/Skills';
import { Experience} from './components/sections/Experience';
import { Portfolio} from './components/sections/Portfolio';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;