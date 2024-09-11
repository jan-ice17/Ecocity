import { useState, useEffect } from 'react';
import { Ecocity_backend } from 'declarations/Ecocity_backend';
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Proposals from "./components/Proposals"; 
import Voting from "./components/Voting";
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';

const App = () => {
  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setActivePage(hash || "home");
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (activePage) {
      case "proposals":
        return <Proposals />;
      case "voting":
        return <Voting />;
      case "dashboard":
        return <Dashboard />;
      case "signup":
        return <Signup />;
      default:
        return (
          <>
            <Hero />
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar activePage={activePage} />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;