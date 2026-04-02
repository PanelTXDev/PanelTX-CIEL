import { useState } from 'react';
import { Switch, Route } from 'wouter';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BacProCIEL from './pages/BacProCIEL';
import CSCyber from './pages/CSCyber';
import BTSCIELAlternance from './pages/BTSCIELAlternance';

function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Programs />
        <WhyChooseUs />
        <News />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/formations/bac-pro-ciel" component={BacProCIEL} />
      <Route path="/formations/cs-cyber" component={CSCyber} />
      <Route path="/formations/bts-ciel-alternance" component={BTSCIELAlternance} />
      <Route component={HomePage} />
    </Switch>
  );
}

export default App;
